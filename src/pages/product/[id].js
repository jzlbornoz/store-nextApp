import React from 'react';
import { useRouter } from 'next/router';
import ProductInfo from '@components/ProductInfo';

import Head from 'next/head';

const ProductId = () => {
  const {
    query: { id },
  } = useRouter();
  //--
  return (
    <>
      <Head>
        <title>YourStore | Product</title>
      </Head>
      <ProductInfo id={id} />
    </>
  );
};

export default ProductId;
