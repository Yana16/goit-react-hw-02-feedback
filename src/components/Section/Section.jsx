import React from "react";
import PropTypes from 'prop-types';
import styles from '../Section/Section.module.css';


const Section = ({title, children}) => {
    return (
        <>
            <span className={styles.Counter__title}>{title}</span>
            {children}
        </>
    );
};



Section.propTypes = {
	title: PropTypes.string.isRequired
};

export default Section;

