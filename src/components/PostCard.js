import React from 'react'
import Link from 'next/link'
import styles from '../styles/PostCard.module.scss'

const PostCard = ({post}) => {
  return (
    <div className={`${styles.PostCard} scale-animate`}>

        <Link href={`/projects/${post.slug}`}>
          <div className={styles.PostCard__image__container}>
            <img className={styles.PostCard__image} src={`/images/thumbs/${post.thumb}`} alt={`Thumbnail for ${post.title}`} />
            <div className={styles.PostCard__forwards_container}>
              <span className={`material-symbols-outlined ${styles.PostCard__forwards__arrow}`}>
                arrow_forward
              </span>
            </div>
          </div>
        </Link>
        <p className={styles.PostCard__title}>{post.title}</p>
      
    </div>
  )
}

export default PostCard
