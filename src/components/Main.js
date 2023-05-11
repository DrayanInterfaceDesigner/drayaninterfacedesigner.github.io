import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Main.module.scss'
import anime from 'animejs'

const Main = ({children}) => {

  const parallax = useRef(null)
  const sec_parallax = useRef(null)

  const [scrollPosition, setScrollPosition] = useState(0)
  let amount = 3
  const speed = .5
  useEffect(()=> {
    amount += ((scrollPosition / 10) % 50)
    const animation = anime({
      targets: parallax.current,
      top: `-${amount}%`,
      duration: 2000,
      easing: 'easeOutQuad',  
      autoplay: false
    })
    console.log(`-${amount}%`)
    const handleScroll = ()=> {
      const current_position = window.scrollY || document.querySelector(".MainContentContainerParallax").scrollTop
      const triggerPosition = parallax.current?.offsetTop - window.innerHeight || 0
      if (scrollPosition > triggerPosition) {
        amount *= -1
        animation.play();
      }
      else {
        amount *= 1
        animation.play();
      }
      setScrollPosition(current_position)
    }
    
    // console.log(document.querySelector(".MainContentContainerParallax").scrollTop)
    document.querySelector(".MainContentContainerParallax").addEventListener('scroll', handleScroll)
    // window.addEventListener('scroll', handleScroll)
    // document.querySelector(".MainContentContainerParallax").addEventListener('scroll', handleScroll)
    
    return () => {window.removeEventListener('scroll', handleScroll)}
  })


  return (
    <main className={styles.Main}>
      <div className={styles.MainContent__mask}></div>
      {/*ref={sec_parallax}*/}
      {/*ref={parallax} */}
        <div className={`${styles.MainContentContainer} MainContentContainerParallax`}>
            <div className={`${styles.MainContent__wallpaper} parallax`}>
              {/* <img src='/images/wallpaper.svg' alt='bg'></img> */}
            </div>
            {children}
        </div>
    </main>
  )
}

export default Main
