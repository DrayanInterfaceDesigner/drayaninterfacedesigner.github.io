import React from 'react'
import styles from '../styles/BubbleContact.module.scss'

const BubbleContact = ({children, style}) => {
  return (
    <div style={style} className={styles.BubbleContact}>
      <div className={styles.BubbleContact__icon}>
        {children}
      </div>
    </div>
  )
}

export default BubbleContact
