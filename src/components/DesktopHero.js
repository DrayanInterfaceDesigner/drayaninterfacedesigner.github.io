import React from 'react'
import styles from '../styles/DesktopHero.module.scss'
import Button from './Button'

const DesktopHero = () => {
  return (
    <div className={styles.DesktopHero}>
        <div className={styles.DesktopHero__wrapper}>
          <div className={styles.DesktopHero__about__wrapper}>
            <p className={styles.name}>Drayan Silva Magalhães</p>
            <p className={styles.text}>
            Software Developer 
            <span className={styles.text__division}> | </span>UI Designer 
            <span className={styles.text__division}> | </span>Apprentice 
            Researcher and Computer Science Bachelor 
            Student at Pontifícia Universidade Católica 
            do Paraná
            </p>
          </div>
          <a href="#about" className={styles.button__readmore}>
            <Button 
            type="button" 
            icon="arrow_downward"
            >ABOUT ME</Button>
          </a>
        </div>
    </div>
  )
}

export default DesktopHero
