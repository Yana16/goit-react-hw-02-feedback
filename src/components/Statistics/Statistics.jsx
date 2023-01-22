import React from "react";
import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';




const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
         <div className={styles.Counter__statistic}>
                    <span className={styles.Counter__value}>Good: {good}</span>
                     <span className={styles.Counter__value}>Neutral: {neutral}</span>
                     <span className={styles.Counter__value}>Bad: {bad}</span>
                     <span className={styles.Counter__value}>Total: {total}</span>
                     <span className={styles.Counter__value}>Positive feedback: {positivePercentage} %</span>
        </div>
        
        </>
    );

};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};

export default Statistics;


