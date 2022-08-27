import React from 'react';
import Dashboard from '@containers/Dashboard';
import useAuth from '@hooks/useAuth';

const DashboardPage = () => {
  const auth = useAuth();
  auth.signIn();
  return (
    <>
      <Dashboard />
    </>
  )
}

export default DashboardPage;