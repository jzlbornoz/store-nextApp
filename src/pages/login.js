import React from 'react';
import Head from 'next/head';
import LoginPage from '@components/LoginPage';

const Login = () => {

    return (
        <>
            <Head>
                <title>YourStore | Login</title>
            </Head>
            <LoginPage />
        </>
    );
};

export default Login;
