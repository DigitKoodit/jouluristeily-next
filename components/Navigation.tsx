import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors, fonts, shadows } from '../styles/stylesheet';
import Header from './Header';
import { NaviItem } from './Layout';
import { Image } from './Styled/Common';
import MenuIcon from './Styled/MenuIcon';
import MenuCloseIcon from './Styled/MenuCloseIcon';


interface NavigationStructure {
  href: string;
  label: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  font-family: ${fonts.title};
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NaviContainer = styled.div`
  position: relative;
  padding-top: 26px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  padding: 18px;
  box-sizing: border-box;
  border-left: 5px solid ${colors.red};
  &:after {
    z-index: 2;
    position: absolute;
    content: '';
    left: -5px;
    bottom: 0px;
    top: 0px;
    border-left: 5px ${colors.yellow} dashed;
  }
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
    font-size: 1.3rem;
  }
`;

const ListItem = styled.li`
  border-bottom: 2px solid;
  border-color: ${(args: any) => args.prop || 'transparent'};
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
  padding-top: 15px;
  padding-right: 15px;
  right: auto;
  left: auto;
  position: fixed;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
`;

const Logo = styled(Image)`
  margin-top: 10px;
  margin-bottom: -20px;
`;

const Icon = styled(Image)`
  width: 100px;
  margin: 20px;
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
          <MenuHolder>
            <MenuIcon onClick={ev => this.toggleNavigation(ev)} />
          </MenuHolder>
          <Logo src="static/logo.svg" alt="logo" />
        </Header>
        <Navi prop={open}>
          <NaviContainer>
            <MenuCloseIcon onClick={ev => this.toggleNavigation(ev)} />
            <NaviHead>
              <Icon src="static/icon.svg" alt="icon" />
            </NaviHead>
            <ul>{navigationStructure.map(this.renderLink)}</ul>
          </NaviContainer>
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
