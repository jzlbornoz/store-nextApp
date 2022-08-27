import PasswordRecovery from '@containers/PasswordRecovery';
import useAuth from '@hooks/useAuth';
import React from 'react';


const Success = () => {
    const auth = useAuth();
    auth.signIn();
    return (
        <>
<PasswordRecovery />
        </>
    );
};

export default Success;