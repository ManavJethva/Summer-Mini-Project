import React from 'react'
import styles from './styles.module.css'

const Footer = (props) => {
    const footerText= "COPYRIGHT ELIXIR 2023. DEVELOPMENT BY The Visionaries Team: Roshan, Aryan, and Manav";
  return (
    <div>
        <footer className={styles.footer}>
            <p className={styles.footerText}>&copy;{footerText}</p>
        </footer>
      
    </div>
  )
}

export default Footer
