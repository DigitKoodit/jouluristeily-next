import * as React from 'react';
import propLoader from '../core/propLoader';
import { fetchPageData } from '../core/api';
import marked from 'marked';
import Markdown from '../components/Styled/Markdown';

const HOME_ID = 'id_home';

const Index: React.SFC<any> = (props: any) => {
  const { text } = props;
  const markdown = marked(text, { sanitize: true });
  return (
    <React.Fragment>
      <Markdown content={markdown} />
    </React.Fragment>
  );
};

const pageLoader = fetchPageData(HOME_ID);

export default propLoader(Index, pageLoader);
