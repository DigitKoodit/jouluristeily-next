import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors, fonts, shadows } from '../styles/stylesheet';
import Header from './Header';
import { NaviItem } from './Layout';
import { Image } from './Styled/Common';
import MenuIcon from './Styled/MenuIcon';

interface NavigationStructure {
  href: string;
  label: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  font-family: ${fonts.secondary};
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navi = styled.nav`
  right: -300px;
  top: 0;
  transition: all 0.2s ease-in-out;
  width: 300px;
  position: fixed;
  z-index: 1;
  background-color: ${colors.white};
  height: 100vh;
  top: 0px;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${({ prop }: any) => {
    return prop
      ? `
      right: 0px;
      box-shadow: ${shadows.tall};
      `
      : '';
  }}
  & ul {
    margin: 0;
    padding: 0;
  }
  & li {
    list-style: none;
    padding: 10px;
  }
`;

const ListItem = styled.li`
  ${({ prop }: any) =>
    prop ? 'border-bottom: 1px solid rgba(0, 0, 0, 0.1);' : ''}
`;

const A = styled.a`
  &:hover {
    color: ${colors.lightred};
    cursor: pointer;
  }
`;

const NaviHead = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;

const MenuHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  right: 15px;
  top: 13px;
  position: fixed;
`;

interface Props {
  navigationStructure?: NavigationStructure[];
}
interface State {
  open: boolean;
}

class Navigation extends React.Component<Props, State> {
  state = { open: false };
  toggleNavigation = (event: React.SyntheticEvent) => {
    event.preventDefault();
    this.setState((state: State) => ({
      open: !state.open
    }));
  };

  render() {
    const { navigationStructure } = this.props;
    const { open } = this.state;
    return (
      <Container>
        <Header>
          <MenuHolder><MenuIcon onClick={ev => this.toggleNavigation(ev)}/></MenuHolder>
        <Image src="static/logo.svg" alt="logo" />
        </Header>
        <Navi prop={open}>
          <NaviHead>
            <img src="https://placehold.it/100x50" />
            <button onClick={ev => this.toggleNavigation(ev)}>Sulje</button>
          </NaviHead>
          <ul>{navigationStructure.map(this.renderLink)}</ul>
        </Navi>
      </Container>
    );
  }

  renderLink(item: NaviItem) {
    return (
      <ListItem key={item.label} prop={item.divider}>
        <Link href={item.href}>
          <A>{item.label}</A>
        </Link>
      </ListItem>
    );
  }
}

export default Navigation;
