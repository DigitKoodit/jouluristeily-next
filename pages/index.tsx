import * as React from 'react';
import propLoader from '../core/propLoader';
import { fetchPageData, useLocalStorage } from '../core/api';
import Markdown from '../components/Styled/Markdown';

const HOME_ID = 'id_home';

const Index: React.SFC<any> = (props: any) => {
  const text = useLocalStorage(HOME_ID, props.text);

  return (
    <React.Fragment>
      <Markdown content={text} />
    </React.Fragment>
  );
};

const pageLoader = fetchPageData(HOME_ID);

export default propLoader(Index, pageLoader);
