import React from 'react';
import Image from 'next/image';
import styles from '@styles/ProductInfo.module.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = ({product}) => {
	return (
		<>
			<Image
				src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="bike"
				width={15}
				height={15}
			/>
			<div className={styles.ProductInfo}>
				<p>{product.name}</p>
				<p>Bike</p>
				<p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
				<button className={(styles['primary-button'], styles['add-to-cart-button'])}>
					<Image
						src={addToCart}
						alt="add to cart"
						width={15}
						height={15}
					/>
					Add to cart
				</button>
			</div>
		</>
	);
};

export default ProductInfo;
