import React from 'react';
import NewPassword from '@containers/NewPassword';
import Head from 'next/head';

const Password = () => {
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
