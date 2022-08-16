import React, { useRef } from 'react';
import addProduct from '@services/api/product';
import styles from "@styles/FormProduct.module.scss";

const FormProduct = () => {

    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            "title": formData.get('title'),
            "price": parseInt(formData.get('price')),
            "description": formData.get('description'),
            "categoryId": parseInt(formData.get('category')),
            "images": [
                formData.get('images')
            ]
        }
        addProduct(data).then((response) => {
            console.log(response);
        })
    }

    // --
    return (
        <section className={styles.FormProduct}>
            <form action="/" ref={formRef} onSubmit={handleSubmit}>
                <label htmlFor="title" >
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                />
                <label htmlFor="price" >
                    Price
                </label>
                <input
                    type="number"
                    name="price"
                    id="price"
                />
                <label htmlFor="category">
                    Category
                </label>
                <select
                    id="category"
                    name="category"
                    autoComplete="category-name">
                    <option value="1">Clothes</option>
                    <option value="2">Electronics</option>
                    <option value="3">Furniture</option>
                    <option value="4">Toys</option>
                    <option value="5">Others</option>
                </select>
                <label
                    htmlFor="description"
                >
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    autoComplete="description"
                />
                <label htmlFor="images" >
                    Image
                </label>
                <input
                    type="text"
                    name="images"
                    id="images"
                />
                <button className={styles['FormProduct-button']} >
                    Add
                </button>
            </form>
        </section >
    )
}

export default FormProduct