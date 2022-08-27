import React from 'react';
import Head from 'next/head';
import CheckoutPage from '@containers/CheckoutPage';
import useAuth from '@hooks/useAuth';


const Checkout = () => {
  const auth = useAuth();
  auth.signIn();
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
