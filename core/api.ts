import * as contentful from 'contentful';

interface ApiConfig {
  space: string;
  accessToken: string;
}

export function createApiClient(config: ApiConfig) {
  const client = contentful.createClient(config);
  return {
    fetchContentTypes: () => {
      return client
        .getContentTypes()
        .then(response => response.items)
        .catch(error => console.log('err', error));
    },

    fetchEventData: id => {
      return client
        .getEntries({ content_type: id })
        .then(response => response.items)
        .catch(err => console.error('API-call went wrong', err)); // tslint:disable-line
    }
  };
}
