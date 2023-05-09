import React from 'react'
import styles from '../styles/Article.module.scss'
import PageTitle from './PageTitle'
import FeaturedImage from './FeaturedImage'

const Article = ({body, data}) => {
  return (
    <div className={styles.Article}>
        <div className={styles.Article__header}>
            <PageTitle title={data.title} subtitle={data?.subtitle} type={data?.type}></PageTitle>
            {data.featured && <FeaturedImage data={data}></FeaturedImage>}
            {console.log(data)}
        </div>

        <div className={styles.Article__body}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    </div>
  )
}

export default Article
