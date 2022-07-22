import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@styles/ProductInfo.module.scss';
import addToCartImg from '@icons/bt_add_to_cart.svg';
import Link from 'next/link';
import AppContext from '@context/AppContext';

const ProductInfo = ({ id }) => {
	const [product, setProduct] = useState([]);
	const { addToCart } = useContext(AppContext);
	const handleClick = (item) => {
		addToCart(item);
	}
	useEffect(() => {
		fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setProduct(data);
			})
			.catch((err) => {
				console.log('error :' + err);
			});
	}, [id]);

	// ---
	return (
		<section className={product.price ? styles.ProductInfo : styles['ProductInfo-Skeleton']}>
			<div className={styles.ProductInfoImageContainer} >
			{product.images
				&& <Image src={product.images[0]}
					width={240}
					height={240}
					alt={product.title}
					loader={() => product.image} unoptimized={true} 
						className={styles.ProductInfoImage}
					/>
			}
			</div>
			<div className={styles.ProductDetails}>
				<h2>{product.price && `$${product.price}`}</h2>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<div className={styles.ProductButtons}>
					<button className={product.price ? styles['primary-button'] : styles['primary-button-skeleton']}
						onClick={() => handleClick(product)} >
						<Image src={addToCartImg}
							alt="add to cart"
							width={30}
							height={30}
							className={product.price ? styles['add-to-cart-button'] : styles['add-to-cart-button-skeleton']}
						/>
						Add to cart
					</button>

					<div className={product.price ? styles.Exit : styles['Exit-Skeleton']}><Link href="/">Back</Link></div>
				</div>

			</div>
		</section>

	);

};

export default ProductInfo;
