import React from 'react';
import styles from '@styles/components/ProductListSkeleton.module.scss';

const ProductListSkeleton = () => {
  return (
    <section className={styles['main-container']}>
      <section className={styles.ProductList}>
        <div className={styles.ProductItem}>
          <div className={styles.Image}></div>
          <div className={styles['product-info']}>
            <div>
              <p>price</p>
              <p>title</p>
            </div>
          </div>
        </div>
         <div className={styles.ProductItem}>
          <div className={styles.Image}></div>
          <div className={styles['product-info']}>
            <div>
              <p>price</p>
              <p>title</p>
            </div>
          </div>
        </div>
        <div className={styles.ProductItem}>
          <div className={styles.Image}></div>
          <div className={styles['product-info']}>
            <div>
              <p>price</p>
              <p>title</p>
            </div>
          </div>
        </div>
        <div className={styles.ProductItem}>
          <div className={styles.Image}></div>
          <div className={styles['product-info']}>
            <div>
              <p>price</p>
              <p>title</p>
            </div>
          </div>
        </div>
        <div className={styles.ProductItem}>
          <div className={styles.Image}></div>
          <div className={styles['product-info']}>
            <div>
              <p>price</p>
              <p>title</p>
            </div>
          </div>
        </div>
        <div className={styles.ProductItem}>
          <div className={styles.Image}></div>
          <div className={styles['product-info']}>
            <div>
              <p>price</p>
              <p>title</p>
            </div>
          </div>
        </div>
        <div className={styles.ProductItem}>
          <div className={styles.Image}></div>
          <div className={styles['product-info']}>
            <div>
              <p>price</p>
              <p>title</p>
            </div>
          </div>
        </div>
        <div className={styles.ProductItem}>
          <div className={styles.Image}></div>
          <div className={styles['product-info']}>
            <div>
              <p>price</p>
              <p>title</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export { ProductListSkeleton };
