import React, { useEffect } from 'react'
import styles from '../styles/PageTitle.module.scss'
import anime from 'animejs'

const PageTitle = ({title, subtitle, type, align="left"}) => {

  useEffect(()=> {
    anime({
      targets: '.ani-blink',
      opacity: [0,1,0,1],
      easing: 'steps(2)',
      duration: 400,
      steps: 4,
      delay: anime.stagger(60)
    })
    anime({
      targets: '.ani-surge_l_r',
      translateX: [-40, 0],
      opacity: [0, 1],
      easing: 'easeInOutBack',
      duration: 400,
      steps: 4,
      delay: anime.stagger(60)
    })
  })

  title = title.toUpperCase()
  subtitle = subtitle?.toUpperCase()
  type = type?.toUpperCase()

  return (
    <div className={styles.PageTitle}>
        <h1 className={`${styles.title} ani-surge_l_r`} align={align}>{title}</h1>
        <p className={`${styles.title_decorative} ani-blink`} align={align} >{type}</p>
      {subtitle && <div className={`${styles.subtitle} ani-surge_l_r`} align={align}>{subtitle}</div>}
    </div>
  )
}

export default PageTitle
