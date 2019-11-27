import ReactGA from 'react-ga';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const initGA = () => {
  console.log('Initializing Google Analytics'); // tslint:disable-line
  ReactGA.initialize(process.env.GA_ID || publicRuntimeConfig.gaid);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
