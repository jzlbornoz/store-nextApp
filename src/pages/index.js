import React from 'react';
import Head from 'next/head';
import ProductList from '@containers/ProductList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Store | NextApp</title>
      </Head>
      <ProductList />
    </>
  );
}
