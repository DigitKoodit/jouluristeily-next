import * as React from 'react';
import propLoader from '../core/propLoader';
import { fetchPageData } from '../core/api';
import Markdown from '../components/Styled/Markdown';
import ProductTable from '../components/ProductTable';

const PAGE_ID = 'id_tuplis';

const Page: React.SFC<any> = (props: any) => {
  const { text, data } = props;
  if (!data) {
    return <h2>Loading...</h2>;
  }
  return (
    <React.Fragment>
      <Markdown content={text} />
      {data.map(item => (
        <ProductTable key={item.sys.id} data={item} />
      ))}
    </React.Fragment>
  );
};

const pageLoader = fetchPageData(PAGE_ID);

export default propLoader(Page, pageLoader);
