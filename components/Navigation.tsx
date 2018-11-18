import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colors, fonts, shadows } from '../styles/stylesheet';
import Header from './Header';

interface NavigationStructure {
  href: string;
  label: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  font-family: ${fonts.title};
`;

const Navi = styled.nav`
  right: -200px;
  top: 0;
  transition: all 0.3s ease-in-out;
  width: 200px;
  position: fixed;
  background-color: ${colors.white};
  height: 100vh;
  top: 0px;
  padding: 20px;
  box-sizing: border-box;
  ${({ prop }: any) => {
    return prop
      ? `
      right: 0px;
      box-shadow: ${shadows.tall}
      `
      : '';
  }};
`;

const A = styled.a``;

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
          <button onClick={event => this.toggleNavigation(event)}>Menu</button>
        </Header>
        <Navi prop={open}>
          <ul>{navigationStructure.map(this.renderLink)}</ul>
        </Navi>
      </Container>
    );
  }

  renderLink(item: any) {
    return (
      <li>
        <Link href={item.href}>
          <A>{item.label}</A>
        </Link>
      </li>
    );
  }
}

export default Navigation;
