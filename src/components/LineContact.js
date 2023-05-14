import React from 'react'
import styles from '../styles/LineContact.module.scss'

const LineContact = ({link, text, children}) => {
  return (
    <div className={`${styles.LineContact} ani-surge-d_b`}>
        <a href={link}
          target='blank'>
          <div className={styles.LineContact__container}>
            <div className={styles.LineContact__bullet} >
              {children}
            </div>
            <p className={styles.LineContact__link__text}>{text ? text : link}</p>
          </div>
        </a>
    </div>
  )
}

export default LineContact
