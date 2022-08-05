import React, { useRef } from 'react';
import styles from '@styles/Login.module.scss';
import Link from 'next/link';

const Login = () => {

    const userRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        console.log(user + password);
    }
    
// -- 
return (
    <>
        <div className={styles.Login}>
            <div className={styles['Login-container']}>
                <form action="/" className={styles.form} >
                    <label htmlFor="email" className={styles.label}>
                        Email address
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="user@example.cm"
                        className={`${styles.input} ${styles.inputEmail}`}
                        ref={userRef}
                    />
                    <label htmlFor="password" className={styles.label}>
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="*********"
                        className={`${styles.input} ${styles.inputPassword}`}
                        ref={passwordRef}

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
