import React from 'react';
import Head from 'next/head';
import ProductList from '@containers/ProductList';
import useAuth  from '@hooks/useAuth';
import LoginPage from '@components/LoginPage';

export default function Home() {
  const auth = useAuth();
  return (
    <>
      <Head>
        <title>Store | NextApp</title>
      </Head>
      {auth.user ? <ProductList /> : <LoginPage />}
    </>
  );
}
