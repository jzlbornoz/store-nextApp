import React from 'react';
import styles from '@styles/MyAccount.module.scss';
import Link from 'next/link';

const MyAccount = () => {
	return (
		<div className={styles.MyAccount}>
			<div className={styles['MyAccount-container']}>
				<h1 className={styles.title}>My account</h1>
				<form action="/" className={styles.form}>
					<div>
						<label htmlFor="name" className={styles.label}>
							Name
						</label>
						<p className={styles.value}>Javier Albornoz</p>
						<label htmlFor="email" className={styles.label}>
							Github
						</label>
						<p className={styles.value}>jzlbornoz</p>
						<label htmlFor="password" className={styles.label}>
							Password
						</label>
						<p className={styles.value}>*********</p>
					</div>
					<input type="submit" value="Edit" className={styles['secondary-button']}/>
					<Link href='/' ><button className={styles['secondary-button']}>Exit</button></Link>
				</form>
			</div>
		</div>
	);
};

export default MyAccount;
