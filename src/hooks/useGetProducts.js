import { useState, useEffect } from 'react';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getPromise = async () => {
      await fetch(API)
        .then((response) => response.json())
        .then((response) => {
          setProducts(response);
          console.log(response)
        })
        .catch((err) => console.log(err));
    };
    getPromise();
  }, []);
  return products;
};

export default useGetProducts;
