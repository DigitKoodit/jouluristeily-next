import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Html, Body } from '../components/Styled/Common';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngry } from '@fortawesome/free-solid-svg-icons';

library.add(faAngry);

interface props {
  styleTags: any;
}

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
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Passion+One:700|Patua+One"
            rel="stylesheet"
          />
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
