import React from 'react';
import styles from './ButtonBlack.module.css'

const ButtonBlack = ({ onClick, children }) => {
  return (
    <div>
      <button
        className={`bg-black text-white px-4 py-2 rounded-md ${styles.btn}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonBlack;
