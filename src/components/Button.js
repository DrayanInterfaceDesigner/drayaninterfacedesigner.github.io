import React from 'react'
import styles from '../styles/Button.module.scss'

const Button = ({text, type, icon, children}) => {
  return (
    <button type={type} className={styles.Button + " ani-surge_l_r"}>
      <p className={styles.Button__text}>
      {text || children}
      </p>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
    </button>
  )
}

export default Button
