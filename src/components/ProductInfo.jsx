import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@styles/ProductInfo.module.scss';
import addToCart from '@icons/bt_add_to_cart.svg';
import Link from 'next/link';

const ProductInfo = ({ id }) => {
	const [product, setProduct] = useState([]);

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
	if (product) {
		return (
			<>
				<section className={styles.ProductInfo}>
					{product.images
						&& <Image src={product.images[0]}
							width={240}
							height={240}
							alt={product.title}
							loader={() => product.image} unoptimized={true} />
					}
					<div className={styles.ProductDetails}>
						<h2>{product.price ? `$${product.price}` : <h2>Loading</h2>}</h2>
						<p>{product.title}</p>
						<p>{product.description}</p>
						<div className={styles.ProductButtons}>
							<button className={styles['primary-button']}>
								<Image src={addToCart}
									alt="add to cart"
									width={30}
									height={30}
									className={styles['add-to-cart-button']}
								/>
								Add to cart
							</button>
							
							<div className={styles.Exit}><Link href="/">Back</Link></div>
						</div>

					</div>
				</section>
			</>
		);
	} else {
		return <h2 className={styles.Loading}>Loading</h2>;
	}
};

export default ProductInfo;
