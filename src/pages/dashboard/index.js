import React from 'react';
import Dashboard from '@containers/Dashboard';
import useAuth from '@hooks/useAuth';
import Head from 'next/head';

const DashboardPage = () => {
  const auth = useAuth();
  auth.signIn();
  return (
    <>
    <Head>
      <title>YourStore | Dashboard</title>
    </Head>
      <Dashboard />
    </>
  )
}

export default DashboardPage;