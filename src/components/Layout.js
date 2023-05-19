import React, { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Main from './Main'
import styles from '../styles/Layout.module.scss'
import anime from 'animejs'
import { setCookie, parseCookies } from 'nookies'


function Layout({ children }) {
  const entrance = useRef(null)
  const handleDone = (bool)=> {
    setCookie(null, 'vignetteIsDone', bool.toString(), { maxAge: 30 * 24 * 60 * 60, path: '/' })
  }

  useEffect(()=> {

    const cookies = parseCookies()
    const vignetteIsDone = cookies.vignetteIsDone
    if(!vignetteIsDone) {
      handleDone(0)
    }

    const animation = anime({
      targets: '.ani-surge-d_b',
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(90)
    })
    animation.pause()
  

    if(vignetteIsDone == 0 || !vignetteIsDone) {
      entrance.current.style.display = "block"
      document.querySelector("html").style.overflowY = "hidden"
      anime({
        targets: "#name path",
        strokeDashoffset: [anime.setDashoffset, 0],
        stroke: "fff",
        easing: 'easeInOutSine',
        duration: 700,
        delay: anime.stagger(50)
      }).finished.then(()=> {
        anime({
          targets: ".box_line",
          keyframes: [
            {strokeDashoffset: [0, 50], strokeDasharray: ['100 90', '100 0']},
          ],
          opacity: [0,1],
          easing: 'easeInOutSine',
          duration: 500
        }).finished.then(()=>{
          anime({
            targets: ".box1",
            opacity: [0, 1],
            easing: 'easeInOutSine',
            duration: 300
          })
          anime({
            targets: ".box2",
            opacity: [0, 1],
            easing: 'easeInOutSine',
            duration: 300
          })
          anime({
            targets: ".backlight",
            opacity: [0, 1],
            easing: 'easeInOutSine',
            duration: 700
          })
          anime({
            targets: "#name path",
            fill: "#000",
            stroke: "#000",
            easing: 'easeInOutSine',
            duration: 300
          })
          anime({
            targets: ".box3",
            opacity: [0, 1],
            easing: 'easeInOutSine',
            duration: 300
          })
          anime({
            targets: ".dev",
            opacity: [0, 1],
            translateX: [-30, 0],
            easing: 'easeInOutSine',
            duration: 300,
            delay: 150
          }).finished.then(()=> {
            anime({
              targets: ".EntranceContainer",
              keyframes:[
                {clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"}
              ],
              easing: 'easeInQuad',
              duration: 200,
              delay: 1500
            }).finished.then(()=> {
              entrance.current.style.display = "none"
              document.querySelector("html").style.overflowY = "auto"
              handleDone(1)
              animation.play()
            })
          })
        })
      })
  
    }
    else {
      entrance.current.style.display = "none"
      document.querySelector("html").style.overflowY = "auto"
      animation.play()
    }

    window.addEventListener('beforeunload', ()=> {
      const cookies = parseCookies()
      const vignetteIsDone = cookies.vignetteIsDone
      if(vignetteIsDone) handleDone(0)
    })
  })

  return (
    <div className={`App`}>
      <div ref={entrance} className={`${styles.EntranceContainer} EntranceContainer`}>
        <div className={`${styles.Entrance__backlight} backlight`}></div>
        <div className={styles.Entrance}>
          <div className={styles.Entrance__stage}>
            {/* <p>AAAAA</p> */}
            <div className={styles.major}>

              <svg className={styles.boxLine} viewBox="10 10 100 100" preserveAspectRatio="none">
                  <path className={`${styles.boxLine__line} box_line`} d="M 10 10 H 110 V 110 H 10 Z"/>
                </svg>
              <div className={styles.name}>
                <svg id="name" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 243.12 487.57">
                  <path className={styles.Letter} d="M139.3,126.59V19.37H188q17.46,0,30.79,6.66a50.85,50.85,0,0,1,20.83,18.69q7.5,12,7.5,28.26t-7.5,28.26a50.69,50.69,0,0,1-20.83,18.68q-13.32,6.67-30.79,6.67Zm25-20.22h22.52a40.15,40.15,0,0,0,18.61-4.06,29.27,29.27,0,0,0,12.25-11.64A34.82,34.82,0,0,0,222,73a34.76,34.76,0,0,0-4.37-17.77,29.4,29.4,0,0,0-12.25-11.56,40.15,40.15,0,0,0-18.61-4.06H164.26Z" transform="translate(-124.44 -18.87)"/><path className={styles.Letter} d="M125.2,310.39l47.64-107.22h24.51l48.09,107.22h-26L180,215.73h10l-39.36,94.66Zm24-23,6.28-18.84H211l6.43,18.84Z" transform="translate(-124.44 -18.87)"/><path className={styles.Letter} d="M125.2,494.19,172.84,387h24.51l48.09,107.22h-26L180,399.53h10l-39.36,94.66Zm24-23,6.28-18.84H211l6.43,18.84Z" transform="translate(-124.44 -18.87)"/><path className={styles.Letter} d="M297.15,310.39V266.58l5.67,15-47.33-78.42H282l36.14,60H303l36.3-60h24.2l-47,78.42,5.67-15v43.81Z" transform="translate(-124.44 -18.87)"/><path className={styles.Letter} d="M264.83,494.19V387h20.53l63.26,77.2h-10V387h24.51V494.19H342.64L279.38,417h10v77.2Z" transform="translate(-124.44 -18.87)"/><path className={styles.Letter} d="M263.48,126.59V19.37H313.2q15.42,0,26.58,4.67T357,37.44a35.33,35.33,0,0,1,6.08,20.68q0,12.1-6.08,20.76T339.78,92.05q-11.16,4.52-26.58,4.52H278.08l12.14-10.72v40.74Zm26.74-38L278.08,76.81h33.64q12.15,0,18.38-4.9t6.24-13.79q0-8.88-6.24-13.71t-18.38-4.82H278.08L290.22,27.8Zm46.45,38L307.78,87.68h28.56l28.88,38.91Z" transform="translate(-124.44 -18.87)"/>
                </svg>
              </div>
              <div className={`${styles.box1} box1`}></div>
              <div className={`${styles.box2} box2`}></div>
              <div className={`${styles.box3} box3`}>
              <p className={`${styles.dev} dev`}>DEV.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header>
        <Navbar></Navbar>
      </Header>
      <Main>
        {children}
      </Main>
    </div>
  );
}

      /* <footer className='Footer'>
        <p>&copy; 2023 My App</p>
      </footer> */

export default Layout;
