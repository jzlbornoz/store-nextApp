import React, { memo, useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import Link from 'next/link';


const ProductItem = ({ product }) => {
	const { state, addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		console.log('in cart: ', state.cart.includes(item));
		addToCart(item);
	};

	return (
		<div className={styles.ProductItem}>
			{product.images[0]
				&& <Link href={`/product/${product.id}`}>
					<Image src={product.images[0]}
						width={240}
						height={240}
						alt={product.title}
						loader={() => product.images[0]}
						unoptimized={true}
						loading='lazy'
					/></Link>}
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<div>
				</div>
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
								width={50}
								height={50} />
						)
						: (
							<Image
								className={(styles['add-to-cart-btn'], styles.pointer)}
								src={addToCartImage} alt="add to cart"
								width={50}
								height={50} />
						)}
				</figure>
			</div>
		</div>
	);
};

export default memo(ProductItem);
