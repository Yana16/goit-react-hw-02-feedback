import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from '../FeedbackOptions/feedback-options.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={styles.Counter__btns}>
        {options.map(option => (
          <button
            className={styles.btn}
            key={shortid.generate()}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
