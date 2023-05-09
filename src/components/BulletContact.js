import React from 'react'
import styles from '../styles/BulletContact.module.scss'
import Github from './svg/Github'
import Linkedin from './svg/Linkedin'

const BulletContact = () => {
  return (
    <div className={styles.BulletContact}>
    
        <div className={styles.BulletContact__bullet} >
            <a 
                href='https://github.com/DrayanInterfaceDesigner' 
                target='blank'>
                <Github className={styles.BulletContact__image}></Github>
            </a>
        </div>

        <div className={styles.BulletContact__bullet} >
            <a 
                href='https://www.linkedin.com/in/drayan-silva-magalhães-6a8061271/' 
                target='blank'>
                <Linkedin className={styles.BulletContact__image}></Linkedin>
            </a>
        </div>
    </div>
  )
}

export default BulletContact
