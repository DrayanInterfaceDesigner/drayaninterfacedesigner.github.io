import React from 'react'
import styles from '../styles/Article.module.scss'
import PageTitle from './PageTitle'
import FeaturedImage from './FeaturedImage'
import { useEffect } from 'react'
import anime from 'animejs'

const Article = ({body, data}) => {

  useEffect(()=> {
    const PIH = document.querySelector('.ParentInnerHTML')
    const PIH_children = PIH.children[0].children
    const cs = []
    const observer = new IntersectionObserver(e => {
      e.forEach(el => {
        if(el.isIntersecting) {
          cs.push(el.target)
          const animation = anime ({
            targets: '.PIH_child',
            translateX: [-20, 0],
            opacity: [0,1],
            duration: 500,
            easing: 'easeInOutSine',
            delay: anime.stagger(50)
          })
          animation.play()
        }
        cs.forEach(c => {
          c.classList.remove('PIH_child')
        })
      })
    }, {})
    for(let i = 0; i < PIH_children.length; i++) {
      PIH_children[i].classList.add('PIH_child')
      observer.observe(PIH_children[i])
    }
  })

  return (
    <div className={styles.Article}>
        <div className={`${styles.Article__header}`}>
            <PageTitle title={data.title} subtitle={data?.subtitle} type={data?.type}></PageTitle>
            {data.featured && <FeaturedImage data={data}></FeaturedImage>}
            {/* {console.log(data)} */}
        </div>

      <div className={`${styles.Article__body} ParentInnerHTML`}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    </div>
  )
}

export default Article
