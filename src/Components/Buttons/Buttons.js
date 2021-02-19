import React from 'react';
import style from './Buttons.module.css';

const Buttons = ({ setStats, name, indx }) => {
  return (
    <button onClick={() => setStats(indx)} type="button">
      {name}
    </button>
  );
};

export default Buttons;
