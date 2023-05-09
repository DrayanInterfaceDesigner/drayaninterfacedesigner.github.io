import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Main.module.scss'
import anime from 'animejs'

const Main = ({children}) => {

  const parallax = useRef(null)
  const sec_parallax = useRef(null)

  const [scrollPosition, setScrollPosition] = useState(0)
  const amount = 3
  const speed = .5
  useEffect(()=> {
    const DEV_calc = `-${(amount + ((scrollPosition / 10) % 20)) }%`
    const animation = anime({
      targets: parallax.current,
      top: DEV_calc,
      duration: 2000,
      easing: 'easeOutQuad',  
      autoplay: false
    })
    console.log('sc', document.querySelector(".MainContentContainerParallax").scrollTop)
    console.log(DEV_calc, ((scrollPosition / 10) % 10) )
    const handleScroll = ()=> {
      const current_position = window.scrollY
      console.log('sc', document.querySelector(".MainContentContainerParallax").scrollTop)
      const triggerPosition = parallax.current?.offsetTop - window.innerHeight || 0
      if (scrollPosition > triggerPosition) {
        animation.play();
      }
      setScrollPosition(current_position)
    }
    window.addEventListener('scroll', handleScroll)
    // document.querySelector(".MainContentContainerParallax").addEventListener('scroll', handleScroll)
    
    return () => {window.removeEventListener('scroll', handleScroll)}
  })


  return (
    <main className={styles.Main}>
      <div className={styles.MainContent__mask}></div>
        <div ref={sec_parallax} className={`${styles.MainContentContainer} MainContentContainerParallax`}>
            <div ref={parallax} className={`${styles.MainContent__wallpaper} parallax`}>
              {/* <img src='/images/wallpaper.svg' alt='bg'></img> */}
            </div>
            {children}
        </div>
    </main>
  )
}

export default Main
