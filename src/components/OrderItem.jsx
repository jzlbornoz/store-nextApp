import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import placeholder from 'assets/icons/placeholder.jpg';
import styles from '@styles/components/OrderItem.module.scss';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (product) => {
		removeFromCart(product);
	};

	return (
		<div className={styles.OrderItem}>
			<figure>
				{product?.images[0]
					? <Image src={product?.images[0]} alt={product?.title} width={50} height={50} />
					: <Image src={placeholder} alt={product?.title} width={50} height={50} />}
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image className={(styles['more-clickable-area'], styles.pointer)}
				src={close} alt="close"
				onClick={() => handleRemove(product)}

			/>
		</div>
	);
};

export default OrderItem;
