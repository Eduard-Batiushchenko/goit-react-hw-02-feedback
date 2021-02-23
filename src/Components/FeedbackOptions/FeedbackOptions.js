import React from 'react';
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

export default FeedbackOptions;
