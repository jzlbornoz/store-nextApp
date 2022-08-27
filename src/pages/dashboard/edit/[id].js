import React, { useEffect, useState } from 'react';
import FormProduct from '@components/FormProduct';
import { useRouter } from 'next/router';
import styles from '@styles/Edit.module.scss';
import axios from 'axios';
import endPoints from '@services/api';
import useAuth from '@hooks/useAuth';

const Edit = () => {
    const router = useRouter();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const { id } = router.query;
        if (!router.isReady) return; // con esto evitamos el error de hacer el llamado con un valor null;
        async function getProduct() {
            const response = await axios.get(endPoints.products.getProduct(id));
            setProduct(response.data);
        };
        getProduct();
    }, [router?.isReady]);
    const auth = useAuth();
    auth.signIn();
    return (
        <section className={styles.Edit}>
            <FormProduct product={product} />
        </section>
    );
};

export default Edit;
