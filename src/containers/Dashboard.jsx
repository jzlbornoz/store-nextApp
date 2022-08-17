import AppContext from '@context/AppContext';
import React, { useContext, useState } from 'react';
import styles from '../styles/Dashboard.module.scss';
import Image from 'next/image';
import Chart from '@components/Chart';
import { Modal } from '@components/Modal';
import FormProduct from '@components/FormProduct';
import { Alert } from '@components/Alert';
import useAlert from '@hooks/useAlert';

const Dashboard = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
    const [open, setOpen] = useState(false);
    const { alert, setAlert, togleAlert } = useAlert();

    const handleModal = () => {
        setOpen(true);
    };

    // Para obtener la suma de todos los precios de articulos
    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };
    // Para obtener las categorias de los articulos del cart
    const categoryName = cart?.map((product) => product.category);
    const categoryCount = categoryName?.map((category) => category.name);
    // Contador de Ocurrencias para obtener las veces que se repiten los articulos
    const countOccurencies = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

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
            {open && (
                <Modal close={setOpen}>
                    <FormProduct setOpen={setOpen} setAlert={setAlert} />
                </Modal>
            )}
            <section className={styles.Dashboard}>
                <Alert alert={alert} handleClose={togleAlert} />
                <h2>Dashboard</h2>
                <p>
                    <span>Shopping Items:</span> {cart.length}
                </p>
                <p>
                    <span>Total:</span> ${sumTotal()}
                </p>
                <button type="button" onClick={() => handleModal()} className={styles['Dashboard-AddButton']}>
                    Add Product
                </button>
                <Chart chartData={data} className="mb-8 mt-2" />
                <div className={styles['Dashboard-List']}>
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
    );
};

export default Dashboard;
