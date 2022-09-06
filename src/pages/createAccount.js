import { CreateAccountPage } from '@containers/CreateAccountPage';
import useAuth from '@hooks/useAuth';
import Head from 'next/head';
import React from 'react';

const CreateAccount = () => {
  const auth = useAuth();
  auth.signIn();
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
