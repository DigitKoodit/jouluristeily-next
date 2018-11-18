import contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.CONTENTUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_TOKEN
});

export const fetchEventData = id => {
  return client
    .getEntries(id)
    .then(data => console.log('data', data))
    .catch(err => console.error('API-call went wrong', err)); // tslint:disable-line
};
