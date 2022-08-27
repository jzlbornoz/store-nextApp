import { CreateAccountPage } from '@containers/CreateAccountPage';
import useAuth from '@hooks/useAuth';
import React from 'react';


const CreateAccount = () => {
    const auth = useAuth();
    auth.signIn();
    return (
        <>
        <CreateAccountPage />
        </>
    );
};

export default CreateAccount;
