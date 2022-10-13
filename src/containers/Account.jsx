import React from 'react';
import Link from 'next/link';
import useAuth from '@hooks/useAuth';
import Image from 'next/image';
import styles from '@styles/containers/MyAccount.module.scss';

const Account = () => {
    const auth = useAuth();
    return (
        <div className={styles.MyAccount}>
            <div className={styles['MyAccount-container']}>
                <h1 className={styles.title}>My account</h1>
                <Image src={auth?.user?.avatar}
                    height={300}
                    width={300}
                    className={styles.avatar}
                    alt={auth?.user?.name} 

                    />
                <form action="/" className={styles.form}>
                    <div>
                        <label htmlFor="name" className={styles.label}>
                            Name
                        </label>
                        <p className={styles.value}>{auth?.user?.name}</p>
                        <label htmlFor="email" className={styles.label}>
                            Mail
                        </label>
                        <p className={styles.value}>{auth?.user?.email}</p>
                        <label htmlFor="password" className={styles.label}>
                            Password
                        </label>
                        <p className={styles.value}>*********</p>
                    </div>
                    <input type="submit" value="Edit" className={styles['secondary-button']} />
                    <Link href='/' ><button className={styles['secondary-button']}>Exit</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Account