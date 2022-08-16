import React from 'react';
import styles from "../styles/FormProduct.module.scss";

const FormProduct = () => {
    return (
        <section className={styles.FormProduct}>
            <form action="/" >
                <label htmlFor="title" >
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                />
                <label htmlFor="price" >
                    Price
                </label>
                <input
                    type="number"
                    name="price"
                />
                <label htmlFor="password">
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
                <button type='button' className={styles['FormProduct-button']} >
                    Add
                </button>
            </form>
        </section >
    )
}

export default FormProduct