import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import styles from '../styles/containers/HomePage.module.scss';
import Image from 'next/image';
import Link from 'next/link';


const HomePage = () => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/14`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((err) => {
                console.log('error :' + err);
            });
    }, []);

    //--
    return (
        <section className={styles.Home}>
            <p className={styles['Home-h2']}>Trending:</p>
            {JSON.stringify(product) == '{}'
                ? <></>
                :
                <section className={styles['Home-Wrapped-Banner']}>
                    <Link href={`/product/${product.id}`} >
                        <div className={styles['Home-Banner']}>
                            {product.images[0] &&
                                <Image
                                    src={product.images[0]}
                                    height={105}
                                    width={115}
                                    alt={product.title}
                                    loader={() => product.images[0]}
                                    unoptimized={true}

                                />}
                            <div className={styles['Home-Banner-Content']}>
                                <span>{product?.title}</span>
                                <p>{product?.description}</p>
                                <span>{product?.price}$</span>
                            </div>

                        </div>
                    </Link>

                </section>
            }
            <ProductList />
        </section >
    )
}

export { HomePage }