import React from 'react';
import styles from "../styles/components/Modal.module.scss";

const Modal = ({ children, close }) => {

    return (
        <>
            <section className={styles.Modal}>
                <div className={styles.ModalContainer}>
                    <button type='button' onClick={() => close(false)} className={styles.ModalExit}>X</button>
                    {children}
                </div>
            </section>

        </>
    )
}

export { Modal }