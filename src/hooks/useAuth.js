import React, { useContext, useState } from 'react';
import AuthContext from '@context/AuthContext';
import axios from 'axios';
import endPoints from 'services/api';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

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
    const router = useRouter();

    const signIn = async (email, password) => {
        const options = {
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
        }
        if (email, password) {
            const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
            if (access_token) {
                const token = access_token.access_token;
                Cookie.set('token', token, { expires: 10 });
                console.log(Cookie.get('token'));

                axios.defaults.headers.Authorization = `Bearer ${token}`;
                const { data: user } = await axios.get(endPoints.auth.profile);
                setUser(user);
            }
        } else {
            const token = Cookie.get('token');
            axios.defaults.headers.Authorization = `Bearer ${token}`;
            const { data: user } = await axios.get(endPoints.auth.profile);
            setUser(user);
        }
    };

    const logout = () => {
        Cookie.remove('token');
        setUser(null);
        delete axios.defaults.headers.Authorization;
        router.push('/');

    }

    // --
    return {
        user,
        signIn,
        error,
        setError,
        logout
    }
}

export default useAuth;