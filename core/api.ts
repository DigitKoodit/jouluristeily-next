import * as React from 'react';
import { createClient } from 'contentful';

export function useLocalStorage(key: string, data: any) {
  const [storedData, setData] = React.useState(null);
  console.log(data);
  React.useEffect(() => {
    const storage = window.localStorage;
    const cached = storage.getItem(key);
    if (!data && cached) {
      setData(cached);
    } else {
      setData(data);
      if (data) {
        window.localStorage.setItem(key, data);
      }
    }
  }, []);
  return storedData;
}

export function createApi() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN
  });
  return {
    fetchContentTypes: () => {
      return client
        .getContentTypes()
        .then(response => response.items)
        .catch(error => console.error('err', error)); // tslint:disable-line
    },

    fetchContentfulData: id => {
      return client
        .getEntries({ content_type: id, include: 2 })
        .then(response => response.items)
        .catch(err => console.error('API-call went wrong', err)); // tslint:disable-line
    }
  };
}

export const fetchPageData = pageId => async () =>
  createApi()
    .fetchContentfulData('page')
    .then((data: any) => {
      const pageData = data
        .map(item => item.fields)
        .find(item => item.id.toLowerCase() === pageId);
      return { ...pageData };
    });
