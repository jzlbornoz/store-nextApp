import React from 'react';
import Head from 'next/head';
import { SendOrderPage } from '@containers/SendOrderPage';

const SendOrder = () => {
  return (
    <>
      <Head>
        <title>Store | Send-Completed</title>
      </Head>
      <SendOrderPage />
    </>
  );
};

export default SendOrder;
