import * as React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

interface State {
  requestStatus: HttpRequestStatus;
}

const Page = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

class Events extends React.Component<null, State> {
  state = {
    requestStatus: ''
  };
  static getInitialProps() {
    console.log('Fetching data');
    return {};
  }

  render() {
    return (
      <Layout>
        <Page>Event page</Page>
      </Layout>
    );
  }
}

export default Events;
