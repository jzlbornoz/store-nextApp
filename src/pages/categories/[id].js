import React from 'react';
import { useRouter } from 'next/router';
import useAuth from '@hooks/useAuth';
import { CategoryProducts } from '@containers/CategoryProducts';


const CategoryPage = () => {
    const { query: { id } } = useRouter();
    const auth = useAuth();
    auth.signIn();
    return (
        <>
            <CategoryProducts id={id} />
        </>
    )
}

export default CategoryPage;