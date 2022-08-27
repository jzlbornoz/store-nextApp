import React from 'react';
import NewPassword from '@containers/NewPassword';
import useAuth from '@hooks/useAuth';

const Password = () => {
    const auth = useAuth();
    auth.signIn();
    return (
        <>
            <NewPassword />
        </>
    );
};

export default Password;