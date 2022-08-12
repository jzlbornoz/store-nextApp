import AppContext from '@context/AppContext'
import React, { useContext } from 'react'
import styles from "../styles/Dashboard.module.scss";
import Image from 'next/image';
import Chart from '@components/Chart';

const Dashboard = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    const categoryName = cart?.map((product) => product.category);
    const categoryCount = categoryName?.map((category) => category.name);
    const countOccurencies = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
        {});

    const data = {
        datasets: [
            {
                label: 'Categories',
                data: countOccurencies(categoryCount),
                borderWidth: 2,
                backgroundColor: ['#324485', '#723285', '#7d2056', '#2c7a3d'],
            },
        ],
    };
    //---

    return (
        <>
            <section className={styles.Dashboard}>
                <h2>Dashboard</h2>
                <div className={styles['Dashboard-List']}>
                    <p>Shopping Items: {cart.length}</p>
                    <p>Total: ${sumTotal()}</p>
                    <Chart chartData={data} className="mb-8 mt-2" />
                    {cart.map((item) => (
                        <div key={item.id} className={styles['Dashboard-List-Item']}>
                            <Image src={item?.images[0]} width={50} height={50} alt={item.title} />
                            <p> {item.title}</p>
                            <p>${item.price}</p>
                            <p>{item.category.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Dashboard