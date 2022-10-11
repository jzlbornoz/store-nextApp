import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import Link from 'next/link';
import placeholder from 'assets/icons/placeholder.jpg';



const ProductItem = ({ product }) => {
	const { state, addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		console.log('in cart: ', state.cart.includes(item));
		addToCart(item);
	};

	return (
		<div className={styles.ProductItem}>
			{product.images[0]
				?
				<Link href={`/product/${product.id}`}>
					<Image src={product.images[0]}
						width={220}
						height={220}
						alt={product.title}
						loader={() => product.images[0]}
						unoptimized={true}
						loading='lazy'
					/></Link>
				:
				<Link href={`/product/${product.id}`}>
					<Image src={placeholder}
						width={240}
						height={240}
						alt={product.title}
						loader={() => product.images[0]}
						unoptimized={true}
						loading='lazy'
					/></Link>}
			<div className={styles['product-info']}>
				<div className={styles['product-info-text']}>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<div>
					<figure className={styles['more-clickable-area']}
						onClick={() => handleClick(product)}
						onKeyPress={() => handleClick(product)}
						role="presentation">
						{state.cart.includes(product)
							? (
								<Image
									className={(styles.disabled, styles['add-to-cart-btn'])}
									src={addedToCartImage}
									alt="added to cart"
									width={40}
									height={40} />
							)
							: (
								<Image
									className={(styles['add-to-cart-btn'], styles.pointer)}
									src={addToCartImage} alt="add to cart"
									width={40}
									height={40} />
							)}
					</figure>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
