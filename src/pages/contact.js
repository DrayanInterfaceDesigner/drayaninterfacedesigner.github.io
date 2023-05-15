import Head from 'next/head'
import Layout from '@/components/Layout'
import PageTitle from '@/components/PageTitle'
import BulletContact from '@/components/BulletContact'
import ContactForm from '@/components/ContactForm'
import HeroCard from '@/components/HeroCard'
import styles from '../styles/contact.module.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import anime from 'animejs'

const Contact = () => {

  const [isDesktop, setIsDesktop] = useState(false)
  const sizeHandler = (window)=> {
    if(window > 1024) setIsDesktop(true)
    else setIsDesktop(false)
  }
  
  useEffect(()=> {


    anime({
      targets: '.ani-surge_l_r',
      translateX: [-40, 0],
      opacity: [0, 1],
      easing: 'easeInOutBack',
      duration: 400,
      steps: 4,
      delay: anime.stagger(60)
    })

    if (document.readyState === "complete") {
      sizeHandler(window.innerWidth)
    } else {
      window.addEventListener('load', ()=> sizeHandler(window.innerWidth))
      window.addEventListener('resize', ()=> sizeHandler(window.innerWidth))
    }
    return () => {
      document.removeEventListener('load', sizeHandler)
      window.addEventListener('resize', ()=> sizeHandler(window.innerWidth))
    }
  }, [])

  return (
    <Layout>
      <div className={styles.Contact}>
        <div className={styles.Contact__Container + " ani-surge_l_r"}>
          <PageTitle title="Contact Me" type="get in touch" align={!isDesktop ? 'center' : 'left'}></PageTitle>
          <div className={styles.Contact__BulletContact}>
            <BulletContact></BulletContact>
          </div>
          <div className={styles.Contact__Aligner}>
            <ContactForm></ContactForm>
          </div>
        </div>
        <div className={styles.HeroCard__Container}>
          <div className={styles.HeroCard__Sizer}>
            <HeroCard></HeroCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
