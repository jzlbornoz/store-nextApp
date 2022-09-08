import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import endPoints from '@services/api';
import axios from 'axios';
import styles from '../styles/CategoryProducts.module.scss';

const CategoryProducts = ({ id }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProducts() {
            if (id) {
                const response = await axios.get(endPoints.categories.getCategoryItems(id));
                setProducts(response.data);
                console.log(response.data);
            } else {
                return null;
            }
        }
        try {
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    return (
        <section className={styles['main-container']}>
            <h2><span>Category: </span>{products[0]?.category?.name}</h2>
            <div className={styles.ProductList}>
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>

        </section>

    );
};

export { CategoryProducts };
