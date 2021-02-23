import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons';

const FeedbackOptions = ({ buttonsName, setStats }) => {
  return (
    <div>
      {buttonsName.map((name, indx) => {
        return (
          <Buttons key={name} name={name} indx={indx} setStats={setStats} />
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  buttonsName: PropTypes.array.isRequired,
  setStats: PropTypes.func.isRequired,
};

export default FeedbackOptions;
