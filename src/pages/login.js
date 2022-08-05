import React, { useRef } from 'react';
import styles from '@styles/Login.module.scss';
import Link from 'next/link';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('email'),
            password: formData.get('password'),
        };
        console.log(data);
    };

    return (
        <>
            <div className={styles.Login}>
                <div className={styles['Login-container']}>
                    <form action="/" className={styles.form} ref={form}>
                        <label htmlFor="email" className={styles.label}>
                            Email address
                        </label>
                        <input
                            type="text"
                            name="email"
                            placeholder="user@example.cm"
                            className={`${styles.input} ${styles.inputEmail}`}
                        />
                        <label htmlFor="password" className={styles.label}>
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="*********"
                            className={`${styles.input} ${styles.inputPassword}`}

                        />
                        <button onClick={handleSubmit} className={`${styles['primary-button']} ${styles['login-button']}`}>
                            Log in
                        </button>
                        <Link href="/">Forgot my password</Link>
                    </form>
                    <button className={`${styles['secondary-button']} ${styles['signup-button']}`}>Sign up</button>
                </div>
            </div>
        </>
    );
};

export default Login;
