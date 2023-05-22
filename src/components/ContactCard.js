import React from 'react'
import styles from '../styles/ContactCard.module.scss'

export const ContactCard = ({children, social, link, description}) => {
  return (
    <div className={styles.ContactCard + " ani-surge_l_r"}>
        <a href={link} target="_blank" className={styles.ContactCard__link}>
            <div className={styles.ContactCard__Wrapper}>
                <div className={styles.ContactCard__info}>
                        <div className={styles.ContactCard__icon}>
                            <div className={styles.ContactCard__icon__container}>
                                {children || ''}
                            </div>
                        </div>
                        <p className={styles.ContactCard__text}>{social || ''}</p>
                        <i className={`${styles.ContactCard__external} material-symbols-outlined`}>ungroup</i>
                </div>
                <div className={styles.ContactCard__more}>
                    <p className={styles.ContactCard__description}>
                        {description || ''}
                        <i className={`${styles.ContactCard__external} material-symbols-outlined`}>ungroup</i>
                    </p>
                </div>
            </div>
        </a>
    </div>
  )
}
