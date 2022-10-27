import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from '@components/ProductItem';
import { ProductEmpty } from '@components/ProductEmpty';
import { ProductListSkeleton } from '@components/ProductListSkeleton';
import { Alert } from '@components/Alert';
import endPoints from '@services/api';
import useAlert from '@hooks/useAlert';
import AppContext from '@context/AppContext';
import styles from '@styles/containers/ProductList.module.scss';

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const { alert, togleAlert, setAlert } = useAlert();
	const { search } = useContext(AppContext);

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



	const filteredProducts = products.filter((filteredProduct) => (
		filteredProduct.title.toLowerCase().includes(search.toLowerCase())
	));

	if (products.length >= 10 && filteredProducts.length > 0) {
		return (
			<section className={styles['main-container']}>
				<Alert alert={alert} handleClose={togleAlert} />
				<section className={styles.ProductList}>
					{filteredProducts.map((product) => (
						<ProductItem product={product} key={product.id} setAlert={setAlert}/>
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
