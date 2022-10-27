import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductList from './ProductList';
import styles from '../styles/containers/HomePage.module.scss';

const HomePage = () => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products?limit=2&offset=2`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log('error :' + err);
            });
    }, []);

    //--
    return (
        <section className={styles.Home}>
            <p className={styles['Home-h2']}>Trending:</p>
            {JSON.stringify(products) == '{}'
                ? <></>
                :
                <section className={styles['Home-Wrapped-Banner']}>
                    <Link href={`/product/${products[0].id}`} >
                        <div className={styles['Home-Banner']}>
                            {products[0].images[0] &&
                                <Image
                                    src={products[0].images[0]}
                                    height={105}
                                    width={115}
                                    alt={products[0].title}
                                    loader={() => products[0].images[0]}
                                    unoptimized={true}

                                />}
                            <div className={styles['Home-Banner-Content']}>
                                <span>{products[0]?.title}</span>
                                <p>{products[0]?.description}</p>
                                <span>{products[0]?.price}$</span>
                            </div>

                        </div>
                    </Link>
                    <Link href={`/product/${products[1].id}`} >
                        <div className={styles['Home-Banner']}>
                            {products[1].images[0] &&
                                <Image
                                    src={products[1].images[0]}
                                    height={105}
                                    width={115}
                                    alt={products[1].title}
                                    loader={() => products.images[0]}
                                    unoptimized={true}

                                />}
                            <div className={styles['Home-Banner-Content']}>
                                <span>{products[1]?.title}</span>
                                <p>{products[1]?.description}</p>
                                <span>{products[1]?.price}$</span>
                            </div>

                        </div>
                    </Link>
                </section>
            }
            <ProductList data-aos="fade-up"/>
        </section >
    )
}

export { HomePage }