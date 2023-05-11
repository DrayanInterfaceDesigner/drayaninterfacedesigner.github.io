import React from 'react'
import styles from '../styles/HeroCard.module.scss'
import LineContact from './LineContact'
import FitImage from './FitImage'
import Github from './svg/Github'
import Linkedin from './svg/Linkedin'
import Button from './Button'
import Mail from './svg/Mail'

const HeroCard = () => {
  return (
    <div className={styles.Hero}>
        <div className={styles.Hero__top}>
          <FitImage src="/images/me.png" alt="Author's Face" options={{margin:'0rem 0', width: '90%'}}
          className={styles.Hero__top__image}></FitImage>
        </div>
        
        <div className={styles.Hero__bottom}>
          <p className={styles.location__text}>Lives in <span className={styles.text__division}>|</span> Brazil - Curitiba (PR)</p>
          <p className={styles.name}>Drayan Silva Magalhães</p>
          <p className={styles.text}>
          Software Developer 
          <span className={styles.text__division}> | </span>UI Designer 
          <span className={styles.text__division}> | </span>Apprentice 
          Researcher and Computer Science Bachelor 
          Student at Pontifícia Universidade Católica 
          do Paraná
          </p>
          
          <div className={styles.Hero__links}>
            <LineContact text="/drayaninterfacedesigner" link='https://github.com/DrayanInterfaceDesigner'>
              <Github></Github>
            </LineContact>
            <LineContact text="/drayan-silva-magalhães" link='https://www.linkedin.com/in/drayan-silva-magalh%C3%A3es-6a8061271/'>
              <Linkedin></Linkedin>
            </LineContact>
            <LineContact text="drayanreset@gmail.com" link='mailto: drayanreset@gmail.com'>
              <Mail></Mail>
            </LineContact>
          </div>
          
        </div>
    </div>
  )
}

export default HeroCard
