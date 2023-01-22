import React from "react";
import PropTypes from 'prop-types';
import styles from '../Notification/Notification.module.css';


const Notification = ({message}) => {

    return (
        <>
                <span className={styles.Counter__title}>{message}</span>
        </>
    );
};

Notification.propTypes = {
    message: PropTypes.string
};

export default Notification;










