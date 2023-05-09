import React from 'react'
import styles from '../styles/PageTitle.module.scss'

const PageTitle = ({title, subtitle, type, align="left"}) => {

    title = title.toUpperCase()
    subtitle = subtitle?.toUpperCase()
    type = type?.toUpperCase()

  return (
    <div className={styles.PageTitle}>
        <h1 className={styles.title} align={align}>{title}</h1>
        <p className={styles.title_decorative} align={align} >{type}</p>
      {subtitle && <div className={styles.subtitle} align={align}>{subtitle}</div>}
    </div>
  )
}

export default PageTitle
