import * as React from 'react';
import propLoader from '../core/propLoader';
import { fetchPageData, useLocalStorage } from '../core/api';
import Markdown from '../components/Styled/Markdown';

const PAGE_ID = 'id_terms';

const Page: React.SFC<any> = (props: any) => {
  const text = useLocalStorage(PAGE_ID, props.text);
  return (
    <React.Fragment>
      <Markdown content={text} />
    </React.Fragment>
  );
};

const pageLoader = fetchPageData(PAGE_ID);

export default propLoader(Page, pageLoader);
