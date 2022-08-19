import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';
import { ProductEmpty } from '@components/ProductEmpty';

const MyOrder = () => {
	const { state, toggleOrder } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

	if(state.cart.length > 0){
		return (
			<aside className={styles.MyOrder}>
				<div className={styles['MyOrder-container']}>
					<div className={styles['title-container']}>
						<Image className={(styles['more-clickable-area'], styles.pointer)}
							src={arrow}
							alt="arrow"
							onClick={() => toggleOrder()}
							width={15}
							height={15} />
						<p className={styles.title}>My order</p>
					</div>
					<div className={styles['my-order-content']}>
						<div className={styles['my-orders']}>
							{state.cart.map((product) => (
								<OrderItem product={product} key={`orderItem-${product.id + state.cart}`} />
							))}
						</div>
						<div className={styles.order}>
							<p>
								<span>Total</span>
							</p>
							<p>${sumTotal()}</p>
						</div>
						<Link href="/checkout" >
							<button type='button' className={styles['primary-button']} onClick={() => toggleOrder()}>Checkout</button>
						</Link>
						<Link href="/dashboard" >
							<button type='button' className={styles['secundary-button']} onClick={() => toggleOrder()}>Dashboard</button>
						</Link>
					</div>
				</div>
			</aside>
		);
	}else {
		return(
<aside className={styles.MyOrder}>
			<ProductEmpty />
		</aside>
		)
		
	}
	
};

export default MyOrder;
