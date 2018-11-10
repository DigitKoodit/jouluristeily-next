import * as React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import styled from 'styled-components';

type Props = {
  title?: string;
};

const naviTree = [{ href: '/about.html', label: 'About' }];

const Body = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Layout: React.SFC<Props> = ({
  children,
  title = 'This is the default title'
}) => (
  <Body>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation navigationStructure={naviTree} />
    {children}
    <footer>I'm here to stay</footer>
  </Body>
);

export default Layout;
