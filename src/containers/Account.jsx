import React from 'react';
import Link from 'next/link';
import useAuth from '@hooks/useAuth';
import Image from 'next/image';
import styles from '@styles/containers/MyAccount.module.scss';

const Account = () => {
    const auth = useAuth();
    return (
        <div className={styles.MyAccount}>
            <h2 className={styles.title}>My account</h2>
            <div className={styles['MyAccount-container']}>
                <div className={styles.avatar}>
                    <Image src={auth?.user?.avatar}
                        height={270}
                        width={270}
                        className={styles.avatar}
                        alt={auth?.user?.name}

                    />
                </div>
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
                </form>
            </div>
            <div className={styles['MyAccount-buttons']}>
                <input type="submit" value="Edit" className={styles['secondary-button']} />
                <Link href='/' ><button className={styles['secondary-button']}>Exit</button></Link>
            </div>
        </div>
    )
}

export default Account