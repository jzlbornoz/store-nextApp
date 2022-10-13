import React from 'react';
import styles from '@styles/components/ProductEmpty.module.scss';

const ProductEmpty = ({messege}) => {
    return (
        <section className={styles.ProductEmpty}>
            <h2>{messege}</h2>
            <br></br>
            <h2>!</h2>
        </section>
    )
}

export { ProductEmpty }