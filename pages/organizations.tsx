import * as React from 'react';
import Layout from '../components/Layout';

class Organizations extends React.Component {
  state = { data: {} };
  getInitialProps() {
    // Fetch data;
  }

  render() {
    return <Layout />;
  }
}

export default Organizations;
