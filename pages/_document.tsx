import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface props{
    styleTags:any;
}

// Document component is strongly typed with `@types/next`
export default class MyDocument extends Document<props> {
    static getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }
  render() {
    return (
      <html lang="en">
        <Head>
          <style>
            @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Passion+One:700|Patua+One');
          </style>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
