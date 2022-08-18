import React, { useRef } from 'react';
import { addProduct } from '@services/api/product';
import styles from '@styles/FormProduct.module.scss';

const FormProduct = ({ setOpen, setAlert, product }) => {
    const formRef = useRef(null);
    console.log(product);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            title: formData.get('title'),
            price: parseInt(formData.get('price')),
            description: formData.get('description'),
            categoryId: parseInt(formData.get('category')),
            images: [formData.get('images').name],
        };

        addProduct(data)
            .then(() => {
                setAlert({
                    active: true,
                    message: 'Product added succesfully',
                    type: 'success',
                    autoClose: false,
                });
                setOpen(false);
            })
            .catch((err) => {
                setAlert({
                    active: true,
                    message: err.message,
                    type: 'error',
                    autoClose: false,
                });
            });
    };


    // --
    return (
        <section className={styles.FormProduct}>
            <form action="/" ref={formRef} onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" defaultValue={product?.title}/>
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" defaultValue={product?.price}/>
                <label htmlFor="category">Category</label>
                <select id="category" name="category" autoComplete="category-name" defaultValue={product?.category}>
                    <option value="1">Clothes</option>
                    <option value="2">Electronics</option>
                    <option value="3">Furniture</option>
                    <option value="4">Toys</option>
                    <option value="5">Others</option>
                </select>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" autoComplete="description" defaultValue={product?.description}/>
                <div className={styles['FormProduct-file']}>
                    <label htmlFor="images" >
                        <span>Upload a file</span>
                        <input type="file" name="images" id="images" defaultValue={product?.images}/>
                    </label>  
                </div>
                <button className={styles['FormProduct-button']}>Save</button>
            </form>
        </section>
    );
};

export default FormProduct;
