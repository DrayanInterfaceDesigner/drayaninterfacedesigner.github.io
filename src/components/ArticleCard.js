import React from 'react'
import Link from 'next/link'
import styles from '../styles/ArticleCard.module.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const ArticleCard = ({post}) => {

  let text_content = getTextContent(post?.htmlString, 150)
  return (
    <div className={styles.ArticleCard}>

        <Link href={`/projects/${post.slug}`}>
          <div className={styles.ArticleCard__image__container}>
            <img className={styles.ArticleCard__image} src={`/images/thumbs/${post.thumb}`} alt={`Thumbnail for ${post.title}`} />
            <div className={styles.ArticleCard__forwards_container}>
              <span className={`material-symbols-outlined ${styles.ArticleCard__forwards__arrow}`}>
                arrow_forward
              </span>
            </div>
          </div>
          <div className={`${styles.ArticleCard__more}`}>
            <p  className={`${styles.ArticleCard__title}`}>{post?.title.toUpperCase()}</p>
            <p className={`${styles.ArticleCard__summary}`}>{text_content}<b>...</b></p>
          </div>
        </Link>
    </div>
  )
}

const getTextContent = (htmlString, chars) => {
  const str = htmlString.toString().split(/<\/?p>|<\/?h1>|<\/?h[2-6]>/gi)
  .join("").split("</p>").join("").slice(0, chars)
  return str
}


export default ArticleCard
