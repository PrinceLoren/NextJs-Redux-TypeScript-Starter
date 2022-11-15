import { GetServerSideProps } from 'next';

import { wrapper } from '@/store';

import { Home } from '@/screens/Home';

export const getServerSideProps: GetServerSideProps =
  // eslint-disable-next-line unused-imports/no-unused-vars
  wrapper.getServerSideProps((store) => async (ctx) => {
    return { props: {} };
  });

export default Home;
