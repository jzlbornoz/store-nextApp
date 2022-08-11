import AppContext from '@context/AppContext'
import React, { useContext } from 'react'
import styles from "../styles/Dashboard.module.scss";
const Dashboard = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
    return (
        <>
            <section className={styles.Dashboard}>
            <h2>Dashboard</h2>
                <div className={styles['Dashboard-List']}>
                <p>Shopping Items: {cart.length}</p>
                    {cart.map((item) => (
                        <div key={item.id} className={styles['Dashboard-List-Item']}>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Dashboard