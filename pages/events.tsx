import * as React from 'react';
import Layout from '../components/Layout';
import { Page } from '../components/Styled/Common';

interface State {
  requestStatus: HttpRequestStatus;
}

class Events extends React.Component<null, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      requestStatus: ''
    };
  }
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
