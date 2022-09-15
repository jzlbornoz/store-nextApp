import React from 'react';
import { useRouter } from 'next/router';
import { CategoryProducts } from '@containers/CategoryProducts';

const CategoryPage = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <>
      <CategoryProducts id={id} />
    </>
  );
};

export default CategoryPage;
