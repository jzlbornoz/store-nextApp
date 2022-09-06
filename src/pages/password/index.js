import React from 'react';
import NewPassword from '@containers/NewPassword';
import useAuth from '@hooks/useAuth';
import Head from 'next/head';

const Password = () => {
    const auth = useAuth();
    auth.signIn();
    return (
        <>
        <Head>
            <title>YourStore | Password</title>
        </Head>
            <NewPassword />
        </>
    );
};

export default Password;