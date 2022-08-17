import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';
import { ProductListSkeleton } from '@components/ProductListSkeleton';
import endPoints from '@services/api';

const ProductList = () => {
	const products = useGetProducts(endPoints.products.getAllProduct);
	if (products.length >= 10) {
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
