import React from 'react'
import styles from './ButtonPurple.module.css'

const ButtonPurple = ({onClick,children}) => {
  return (
    <div>
      <button
        className={`text-white bg-colorbgbutton px-4 py-2 rounded-md shadow-2xl ${styles.btn}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default ButtonPurple
