declare namespace JSX {
  interface IntrinsicAttributes {
    prop?: any;
  }
}

declare namespace process {
  interface env {
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_TOKEN: string;
  }
}

declare var CONTENTFUL_SPACE_ID;
declare var CONTENTFUL_TOKEN;

type HttpRequestStatus = 'PENDING' | 'FULFILLED' | 'REJECTED' | '';

declare interface CruiseEvent {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  deck: number;
  id: string;
}
