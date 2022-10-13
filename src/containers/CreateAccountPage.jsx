import React from 'react';
import Link from 'next/link';
import styles from '@styles/containers/CreateAccount.module.scss';

const CreateAccountPage = () => {
  return (
    <div className={styles.CreateAccount}>
      <div className={styles['CreateAccount-container']}>
        <h1 className={styles.title}>My account</h1>
        <form action="/" className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input type="text" id="name" placeholder="Teff" className={styles.input} />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input type="text" id="email" placeholder="user@example.com" className={styles.input} />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input type="password" id="password" placeholder="*********" className={styles.input} />
          </div>
          <Link href='/'><button type="button"  className={styles['primary-button']} >Create</button></Link>
        </form>
      </div>
    </div>
  );
};

export { CreateAccountPage };
