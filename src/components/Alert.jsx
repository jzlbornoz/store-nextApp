import React from 'react';
import styles from '@styles/components/Alert.module.scss';

const Alert = ({ alert, handleClose }) => {
    if (alert && alert?.autoClose) {
        setTimeout(() => {
            handleClose();
        }, 9000)
    }

    return (
        <>
            {alert.active && (
                <section className={styles.Alert}>
                    <div className={styles['Alert-content']}>
                        <p>{alert.message}</p>
                    </div>
                    <button type="button" className={styles['Alert-button']} onClick={handleClose}>
                        X
                    </button>
                </section>
            )}
        </>

    );
};

export { Alert };
