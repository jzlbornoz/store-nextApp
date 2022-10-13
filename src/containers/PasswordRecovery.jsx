import React from 'react';
import Link from 'next/link';
import styles from '@styles/containers/PasswordRecovery.module.scss';

const PasswordRecovery = () => {
	return (
		<div className={styles.PasswordRecovery}>
			<div className={styles['PasswordRecovery-container']}>
				<h1 className={styles.title}>Password recovery</h1>
				<Link href='/'><button type="button" className={styles['primary-button']}>Confirmar</button></Link>
			</div>
		</div>
	);
}

export default PasswordRecovery;
