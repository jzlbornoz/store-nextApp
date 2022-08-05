import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';
import { ProductListSkeleton } from '@components/ProductListSkeleton';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);
	console.log(products);

	if (products.length >= 200) {
		return (
			<section className={styles['main-container']}>
				<section className={styles.ProductList}>
					{products.map((product) => (
						<ProductItem product={product} key={product.id} />
					))}
				</section>
			</section>
		);
	} else {
		return <ProductListSkeleton />
	}

};

export default ProductList;
