import React from 'react'
import styles from '../styles/FeaturedImage.module.scss'

const FeaturedImage = ({data}) => {
  return (
    <div className={styles.FeaturedImage}>
        <img 
            className={styles.FeaturedImage__image} 
            src={`/images/thumbs/${data.thumb}`} 
            alt={`Featured Image for ${data?.title}`}>    
        </img>
    </div>
  )
}

export default FeaturedImage
