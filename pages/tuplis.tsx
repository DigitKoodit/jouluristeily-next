import * as React from 'react';
import propLoader from '../core/propLoader';
import { fetchPageData, useLocalStorage } from '../core/api';
import Markdown from '../components/Styled/Markdown';
import ProductTable from '../components/ProductTable';

const PAGE_ID = 'id_tuplis';

const Page: React.SFC<any> = (props: any) => {
  const text = useLocalStorage(PAGE_ID, props.text);
  const data = useLocalStorage(PAGE_ID + 'data', props.data);
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
