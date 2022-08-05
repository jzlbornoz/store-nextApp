import React, { useContext, useState } from 'react';
import AuthContext from '@context/AuthContext';

export function ProviderAuth({ children }) {
    const auth = useProviderAuth();
    return (
        <AuthContext.Provider value={auth} >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext);
}

const useProviderAuth = () => {
    const [user, setUser] = useState(null);
    const signIn = async (email, password) => {
        setUser('landing')
    }

    return {
        user,
        signIn
    }
}

export default useAuth;