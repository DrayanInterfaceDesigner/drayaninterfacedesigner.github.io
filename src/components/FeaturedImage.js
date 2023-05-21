import React from 'react'
import styles from '../styles/FeaturedImage.module.scss'
import { useEffect } from 'react'
import anime from 'animejs'

const FeaturedImage = ({data}) => {
  useEffect(()=> {
    anime({
      targets: '.ani-appear',
      opacity: [0, 1],
      translateX: [-40, 0],
      easing: 'easeOutQuad',
      duration: 300
    })
  })
  return (
    <div className={`${styles.FeaturedImage} ani-appear`}>
        <img 
            className={styles.FeaturedImage__image} 
            src={`${data?.featured.startsWith('http') ? data.featured : `/images/featured/${data.featured}`}`} 
            alt={`Featured Image for ${data?.title}`}>    
        </img>
    </div>
  )
}

export default FeaturedImage
