import React, { useContext, useState } from 'react';
import AuthContext from '@context/AuthContext';
import axios from 'axios';
import endPoints from 'services/api';
import Cookies from 'js-cookie';

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
    const [error, setError] = useState(false);
    const signIn = async (email, password) => {
        const options = {
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
        }
        const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
        if (access_token) {
            Cookies.set('token', access_token.access_token, { expires: 5 });
        }

        axios.defaults.headers.Authorization = `Bearer ${access_token.access_token}`;
        const { data: user } = await axios.get(endPoints.auth.profile);
        setUser(user);
    };

    return {
        user,
        signIn,
        error,
        setError
    }
}

export default useAuth;