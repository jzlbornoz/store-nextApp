import React from 'react';
import styles from '@styles/NewPassword.module.scss';
import Link from 'next/link';


const NewPassword = () => {
	return (
		<div className={styles.NewPassword}>
			<div className={styles['NewPassword-container']}>
				<h1 className={styles.title}>Create a new password</h1>
				<p className={styles.subtitle}>Enter a new passwrd for yue account</p>
				<form action="/" className={styles.form}>
					<label htmlFor="password" className={styles.label}>Password</label>
					<input
						type="password"
						id="password"
						placeholder="*********"
						className={(styles.input, styles['input-password'])}

					/>
					<label
						htmlFor="new-password"
						className={styles.label}
					>Password</label>
					<input
						type="password"
						id="new-password"
						placeholder="*********"
						className={(styles.input, styles['input-password'])}
					/>
					<Link href='/password/success'><button type="button" className={styles['primary-button']}>Confirmar</button></Link>
				</form>
			</div>
		</div>
	);
}

export default NewPassword;
