import React from 'react';
import style from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive feedback:
          {countPositiveFeedbackPercentage}%
        </li>
      </ul>
    </div>
  );
};

Statistics.defaultProps = {
  total: 0,
  countPositiveFeedbackPercentage: 0,
};

export default Statistics;
