import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {colors} from '../styles/stylesheet';

interface NavigationStructure {
  href: string;
  label: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
`;

const Navi = styled.nav`
  right: ${({ prop }: any) => prop};
  top: 0;
  transition: all 0.3s ease-in-out;
  width: 300px;
  position: fixed;
  background-color: ${colors.red};
  height: 100vh;
  top: 0px;
`;

const A = styled.a``;

interface Props {
  navigationStructure?: NavigationStructure[];
}
interface State {
  open: boolean;
  position: string;
}
class Navigation extends React.Component<Props, State> {
  state = { open: false, position: '-300px' };
  toggleNavigation = (event: React.SyntheticEvent) => {
    event.preventDefault();
    this.setState((state: State) => ({
      open: !state.open,
      position: !state.open ? '0px' : '-300px'
    }));
  };

  render() {
    const { navigationStructure } = this.props;
    const { position } = this.state;
    return (
      <Container>
        <button onClick={event => this.toggleNavigation(event)}>Menu</button>
        <Navi prop={position}>
          {navigationStructure.map((item: NavigationStructure) => (
            <Link href={item.href}>
              <A>{item.label}</A>
            </Link>
          ))}
        </Navi>
      </Container>
    );
  }
}

export default Navigation;
