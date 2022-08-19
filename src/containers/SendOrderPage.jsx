import React from 'react';
import Image from 'next/image';
import email from '../assets/icons/email.svg';
import styles from '@styles/SendOrder.module.scss';

const SendOrderPage = () => {
	return (
		<div className={styles.SendOrder}>
			<div className={styles['form-container']}>
				<h2>Atech Store</h2>
				<h1 className={styles.title}>Your Order has been sent!</h1>
				<p className={styles.subtitle}>Thanks for choosing us!</p>
				<div className={styles['email-image']}>
					<Image src={email} alt="email" width={100}
					 height={100}/>
				</div>
			</div>
		</div>
	);
}

export  {SendOrderPage};
