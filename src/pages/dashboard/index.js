import React from 'react';
import Dashboard from '@containers/Dashboard';
import Head from 'next/head';

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>YourStore | Dashboard</title>
      </Head>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
