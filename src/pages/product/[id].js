import React from 'react';
import { useRouter } from 'next/router';
import ProductInfo from '@components/ProductInfo';

const ProductId = () => {
  const { query: { id } } = useRouter();
  
  //-- 
  return (
    <>
        <ProductInfo id={id} />
    </>

  )
}

export default ProductId;