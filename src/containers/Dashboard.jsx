import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from '../styles/Dashboard.module.scss';
import Image from 'next/image';
import Chart from '@components/Chart';
import { Modal } from '@components/Modal';
import FormProduct from '@components/FormProduct';
import { Alert } from '@components/Alert';
import useAlert from '@hooks/useAlert';
import endPoints from '@services/api';
import Link from 'next/link';
import placeholder from 'assets/icons/placeholder.jpg';
import { ProductListSkeleton } from '@components/ProductListSkeleton';
import { deleteProduct } from '@services/api/product';
import AppContext from '@context/AppContext';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const { alert, setAlert, togleAlert } = useAlert();
    const { search } = useContext(AppContext);

    const handleModal = () => {
        setOpen(true);
    };

    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await axios.get(endPoints.products.getAllProduct);
            setCart(response.data);
        }
        try {
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }, [alert]);

    // Filtra el resultado de la API segun el input del header
    const filteredProducts = cart.filter((filteredProduct) => (
        filteredProduct.title.toLowerCase().includes(search.toLowerCase())
    ));

    // Para obtener la suma de todos los precios de articulos
    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum = filteredProducts.reduce(reducer, 0);
        const sumAverage = parseInt(sum / filteredProducts.length);
        return sumAverage;
    };

    // Para obtener las categorias de los articulos del cart
    const categoryName = filteredProducts?.map((product) => product.category);
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

    const handleDelete = (id) => {
        deleteProduct(id).then(() => {
            setAlert({
                active: true,
                message: 'Delete product successfully',
                type: 'error',
                autoClose: true,
            });
        })
    };

    //---
    if (cart.length > 1) {
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
                    <section className={styles['Dashboard-Bar']}>
                        <p>
                            <span>Shopping Items:</span> {cart.length}
                        </p>
                        <p>
                            <span>Average per item:</span> ${sumTotal()}
                        </p>
                        <div>
                            <button type="button" onClick={() => handleModal()} className={styles['Dashboard-AddButton']}>
                                Add Product
                            </button>
                        </div>
                    </section>

                    <div className={styles['Dashboard-chart']}>
                        <Chart chartData={data} />
                    </div>
                    <div className={styles['Dashboard-List']}>
                        {filteredProducts.map((item) => (
                            <div key={item.id} className={styles['Dashboard-List-Item']}>
                                {item.images[0]
                                    ?
                                    <Link href={`/product/${item.id}`}>
                                        <Image src={item.images[0]}
                                            width={50}
                                            height={50}
                                            alt={item.title}
                                            loader={() => item.images[0]}
                                            unoptimized={true}
                                            loading='lazy'
                                        /></Link>
                                    :
                                    <Link href={`/product/${item.id}`}>
                                        <Image src={placeholder}
                                            width={50}
                                            height={50}
                                            alt={item.title}
                                            loader={() => item.images[0]}
                                            unoptimized={true}
                                            loading='lazy'
                                        /></Link>}
                                <p> {item.id}</p>
                                <p>${item.price}</p>
                                <p>{item.category.name}</p>
                                <Link href={`/dashboard/edit/${item.id}`}>Edit</Link>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </section>
            </>
        );
    } else {
        return <ProductListSkeleton />
    }

};

export default Dashboard;
