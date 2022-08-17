import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
//import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';
import { ProductListSkeleton } from '@components/ProductListSkeleton';
import endPoints from '@services/api';
import { Alert } from '@components/Alert';
import useAlert from '@hooks/useAlert';
import axios from 'axios';

const ProductList = () => {
	const [products , setProducts] = useState([]);
	const { alert, togleAlert, setAlert } = useAlert();
	
	useEffect(() => {
		async function getProducts() {
		  const response = await axios.get(endPoints.products.getAllProduct);
		  setProducts(response.data);
		}
		try {
		  getProducts();
		} catch (error) {
		  console.log(error);
		}
	  }, [alert]);

	
	if (products.length >= 10) {
		return (
			<section className={styles['main-container']}>
				<Alert alert={alert} handleClose={togleAlert} />
				<section className={styles.ProductList}>
					{products.map((product) => (
						<ProductItem product={product} key={product.id} setAlert={setAlert} />
					))}
				</section>
			</section>
		);
	} else {
		return <ProductListSkeleton />
	}

};

export default ProductList;
