import React from 'react'
import styles from './ButtonDim.module.css'


const ButtonDim = ({onClick,children}) => {
  return (
    <div>
      <button
        className={`text-white bg-colorbghero px-4 py-2 rounded-md shadow-2xl ${styles.btn}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default ButtonDim
