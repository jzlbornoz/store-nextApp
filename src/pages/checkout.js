import React from 'react';
import Head from 'next/head';
import CheckoutPage from '@containers/CheckoutPage';


const Checkout = () => {

  return (
    <>
      <Head>
        <title>Store | Checkout</title>
      </Head>
      <CheckoutPage />
    </>
  );
};

export default Checkout;
