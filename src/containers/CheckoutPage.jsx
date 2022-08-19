import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';
import AppContext from '@context/AppContext';
import Link from 'next/link';

const CheckoutPage = () => {
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
                <p>${sumTotal()}</p>
              </div>
            </div>
            {cart.map((product) => (
              <OrderItem product={product} key={product.id + 12} />
            ))}
            <Link href='/'><button className={styles['Checkout-container-buy']}>Card</button></Link>
            <Link href='/'><button className={styles['Checkout-container-paypal']}>PayPal</button></Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.Checkout}>
          <h2>Haz tu pedido</h2>
        </div>
      </>
    );
  }
};

export default CheckoutPage;