import { CreateAccountPage } from '@containers/CreateAccountPage';
import Head from 'next/head';
import React from 'react';

const CreateAccount = () => {
  return (
    <>
      <Head>
        <title>YourStore | Create Account</title>
      </Head>
      <CreateAccountPage />
    </>
  );
};

export default CreateAccount;
