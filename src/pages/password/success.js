import PasswordRecovery from '@containers/PasswordRecovery';
import useAuth from '@hooks/useAuth';
import Head from 'next/head';
import React from 'react';

const Success = () => {
    const auth = useAuth();
    auth.signIn();
    return (
        <>
            <Head>
                <title>
                    YourStore | Password-Success
                </title>
            </Head>
            <PasswordRecovery />
        </>
    );
};

export default Success;
