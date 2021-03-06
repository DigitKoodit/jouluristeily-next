import * as React from 'react';
import Layout from '../components/Layout';
import { Page } from '../components/Styled/Common';

const propLoader = (Component: any, loader) => {
  return class extends React.Component<any, any> {
    static getInitialProps() {
      return loader();
    }
    render() {
      return (
        <Layout>
          <Page>
            <Component {...this.props} />
          </Page>
        </Layout>
      );
    }
  };
};

export default propLoader;
