import * as React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import styled from 'styled-components';
import Footer from './Footer';
import { colors } from '../styles/stylesheet';
import { initGA, logPageView } from '../core/analytics';

type Props = {
  title?: string;
  children: any;
};

const Content = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  background-color: ${colors.white};
`;

export interface NaviItem {
  href: string;
  label: string;
  divider?: string;
}

const naviTree: NaviItem[] = [
  { href: '/index', label: 'JR 2018' },
  { href: '/events', label: 'Ohjelma' },
  { href: '/prices', label: 'Hinnasto' },
  { href: '/notepad', label: 'Hyttimuistio', divider: colors.lightred },
  // { href: '/namegenerator', label: 'Risteilynimeni'},
  { href: '/guide', label: 'Ohjeet' },
  { href: '/terms', label: 'Matkaehdot', divider: colors.lightred },
  { href: '/loimu', label: 'Loimu' },
  { href: '/afterlecture', label: 'After Lecture' }
];

class Layout extends React.Component<Props> {
  componentDidMount() {
    if (!window['GA_INITIALIZED']) {
      initGA();
      window['GA_INITIALIZED'] = true;
    }
    logPageView();
  }
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Jouluristeily 2018</title>
          <link rel="shortcut icon" href="static/icon.svg" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Content>
          <Navigation navigationStructure={naviTree} />
          {children}
          <Footer />
        </Content>
      </React.Fragment>
    );
  }
}

export default Layout;
