import React, { useContext } from 'react';
import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';
import AppContext from '@context/AppContext';

const Checkout = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  //--
  if (cart.length > 0) {
    return (
      <>
        <div className={styles.Checkout}>
          <div className={styles['Checkout-container']}>
            <h1 className={styles.title}>My order</h1>
            <div className={styles['Checkout-content']}>
              <div className={styles.order}>
                <p>
                  <span>{`${cart.length} articles`}</span>
                </p>
                <p>{sumTotal()}</p>
              </div>
            </div>
            {cart.map((product) => (
              <OrderItem product={product} key={product.id + 12} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Store | Checkout</title>
        </Head>
        <div className={styles.Checkout}>
          <h2>Haz tu pedido</h2>
        </div>
      </>
    );
  }
};

export default Checkout;
