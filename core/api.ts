import { createClient } from 'contentful';

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

    fetchEventData: id => {
      return client
        .getEntries({ content_type: id })
        .then(response => response.items)
        .catch(err => console.error('API-call went wrong', err)); // tslint:disable-line
    }
  };
}

export const fetchPageData = (pageId) => async () =>
  createApi().fetchEventData('page').then((data: any) => {
    const pageData = data
      .map(item => item.fields)
      .find(item => item.id.toLowerCase() === pageId);
    return { ...pageData };
  });
