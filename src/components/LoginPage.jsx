import React, { useRef } from 'react';
import styles from '@styles/Login.module.scss';
import Link from 'next/link';
import useAuth from '@hooks/useAuth';
import { useRouter } from 'next/router';


const LoginPage = () => {

    const userRef = useRef(null);
    const passwordRef = useRef(null);
    const auth = useAuth();
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = userRef.current.value;
        const password = passwordRef.current.value;
        auth.signIn(user, password).then(
            () => {
                auth.setError(false);
                console.log('login success');
                router.push('/');
            },
            (err) => {
                console.log("Error" + err);
                auth.setError(true);
            }
        )
        console.log(user + password);
    }
    // -- 
    return (
        <>
            <div className={styles.Login}>
                <div className={styles['Login-container']}>
                    <h2>Sign in</h2>
                    <form action="/" className={styles.form} >
                        <input
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            className={`${styles.input} ${styles.inputEmail}`}
                            ref={userRef}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="*********"
                            className={`${styles.input} ${styles.inputPassword}`}
                            ref={passwordRef}

                        />
                        {auth.error ? <div className={styles.error}>Error. invalid Mail/Password</div> : null}
                        <button onClick={handleSubmit} className={`${styles['primary-button']} ${styles['login-button']}`}>
                            Log in
                        </button>
                        <Link href="/password">Forgot my password</Link>
                    </form>
                    <Link href='/createAccount'>
                        <button className={`${styles['secondary-button']} ${styles['signup-button']}`}>Sign up</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
