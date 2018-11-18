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

type HttpRequestStatus = 'PENDING' | 'FULFILLED' | 'REJECTED' | '';
declare namespace JR {

}
