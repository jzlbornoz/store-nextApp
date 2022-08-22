import React, { useContext, useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
//import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';
import { ProductListSkeleton } from '@components/ProductListSkeleton';
import endPoints from '@services/api';
import { Alert } from '@components/Alert';
import useAlert from '@hooks/useAlert';
import axios from 'axios';
import AppContext from '@context/AppContext';
import { ProductEmpty } from '@components/ProductEmpty';

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const { alert, togleAlert, setAlert } = useAlert();
	const { search } = useContext(AppContext);

	useEffect(() => {
		async function getProducts() {
			const response = await axios.get(endPoints.products.getAllProduct);
			setProducts(response.data);
			console.log(response.data);
		}
		try {
			getProducts();
		} catch (error) {
			console.log(error);
		}
	}, [alert]);



	const filteredProducts = products.filter((filteredProduct) => (
		filteredProduct.title.toLowerCase().includes(search.toLowerCase())
	));

	if (products.length >= 10 && filteredProducts.length > 0) {
		return (
			<section className={styles['main-container']}>
				<Alert alert={alert} handleClose={togleAlert} />
				<section className={styles.ProductList}>
					{filteredProducts.map((product) => (
						<ProductItem product={product} key={product.id} setAlert={setAlert} />
					))}
				</section>
			</section>
		);
	} else if (filteredProducts.length == 0 && products.length >= 10) {
		return (
			<section className={styles['main-container']}>
				<ProductEmpty messege={"Not Found"} />
			</section>
		)
	} else {
		return <ProductListSkeleton />
	}

};

export default ProductList;
