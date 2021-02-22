import React from 'react';
import PropTypes from 'prop-types';
import style from './Buttons.module.css';

const Buttons = ({ setStats, name, indx }) => {
  return (
    <button onClick={() => setStats(indx)} type="button">
      {name}
    </button>
  );
};

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
  indx: PropTypes.number.isRequired,
  setStats: PropTypes.func.isRequired,
};

export default Buttons;
