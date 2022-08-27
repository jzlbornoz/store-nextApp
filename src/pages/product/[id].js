import React from 'react';
import { useRouter } from 'next/router';
import ProductInfo from '@components/ProductInfo';
import useAuth from '@hooks/useAuth';

const ProductId = () => {
  const { query: { id } } = useRouter();
  const auth = useAuth();
  auth.signIn();
  //-- 
  return (
    <>
        <ProductInfo id={id} />
    </>

  )
}

export default ProductId;