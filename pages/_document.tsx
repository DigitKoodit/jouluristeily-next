import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import styled, { ServerStyleSheet } from 'styled-components';

interface props {
  styleTags: any;
}

const Html = styled.html`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
`;

const Body = styled.body`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

// Document component is strongly typed with `@types/next`
export default class MyDocument extends Document<props> {
  static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <style>
            @import
            url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Passion+One:700|Patua+One');
          </style>
          {this.props.styleTags}
        </Head>
        <Body>
          <Main />
          <NextScript style={{ flex: 1 }} />
        </Body>
      </Html>
    );
  }
}
