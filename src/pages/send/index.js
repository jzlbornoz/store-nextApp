import React from 'react';
import Head from 'next/head';
import { SendOrderPage } from '@containers/SendOrderPage';
import useAuth from '@hooks/useAuth';

const SendOrder = () => {
    const auth = useAuth();
    auth.signIn();
    return (
        <>
            <Head>
                <title>Store | Send-Completed</title>
            </Head>
            <SendOrderPage />
        </>
    );
};

export default SendOrder;