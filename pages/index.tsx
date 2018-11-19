import Link from 'next/link';
import Layout from '../components/Layout';
import { Page } from '../components/Styled/Common';

export default () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Page>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    </Page>
  </Layout>
);
