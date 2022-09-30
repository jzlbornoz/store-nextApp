import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import styles from '../styles/containers/HomePage.module.scss';
import Image from 'next/image';


const HomePage = () => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/14`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
            .catch((err) => {
                console.log('error :' + err);
            });
    }, []);
    console.log(product)
    return (
        <section className={styles.Home}>
            {JSON.stringify(product) == '{}'
                ? <></>
                :
                <div className={styles['Home-Banner']}>
                    {product.images[0] &&
                        <Image
                            src={product.images[0]}
                            height={145}
                            width={155}
                            alt={product.title}
                            loader={() => product.images[0]}
                            unoptimized={true}

                        /> }
                    <div className={styles['Home-Banner-Content']}>
                        <span>{product?.title}</span>
                        <p>{product?.description}</p>
                        <span>{product?.price}$</span>
                    </div>

                </div>}
                <ProductList />
        </section>
    )
}

export { HomePage }