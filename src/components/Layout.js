import React, { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Main from './Main'
import styles from '../styles/Layout.module.scss'
import anime from 'animejs'
import { setCookie, parseCookies } from 'nookies'


function Layout({ children }) {
  const entrance = useRef(null)
  const cookies = parseCookies()
  const vignetteIsDone = cookies.vignetteIsDone
  const handleDone = (bool)=> {
    setCookie(null, 'vignetteIsDone', bool.toString(), { maxAge: 30 * 24 * 60 * 60, path: '/' })
  }

  useEffect(()=> {

    alert('vignette is done TESTING ON PRODUCTION LMAO')

    const animation = anime({
      targets: '.ani-surge-d_b',
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(90)
    })
    animation.pause()

    if(vignetteIsDone == 0) {
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
                  <path className={styles.Letter}   d="M153.3,126.59V19.37H202q17.46,0,30.79,6.66a50.85,50.85,0,0,1,20.83,18.69q7.5,12,7.5,28.26t-7.5,28.26a50.69,50.69,0,0,1-20.83,18.68q-13.32,6.67-30.79,6.67Zm25-20.22h22.52a40.15,40.15,0,0,0,18.61-4.06,29.27,29.27,0,0,0,12.25-11.64A34.82,34.82,0,0,0,236,73a34.76,34.76,0,0,0-4.37-17.77,29.4,29.4,0,0,0-12.25-11.56,40.15,40.15,0,0,0-18.61-4.06H178.26Z" transform="translate(-138.44 -18.87)"/><path className={styles.Letter}   d="M279.81,126.59V19.37h46.41q14.4,0,24.81,4.67a36.36,36.36,0,0,1,16.09,13.4q5.65,8.75,5.66,20.68,0,12.1-5.66,20.76A35.53,35.53,0,0,1,351,92.05q-10.41,4.52-24.81,4.52H293.44l11.34-10.72v40.74Zm25-38L293.44,76.81h31.4q11.34,0,17.16-4.9t5.82-13.79q0-8.88-5.82-13.71t-17.16-4.82h-31.4l11.34-11.8Zm43.34,38L321.17,87.68h26.65l26.95,38.91Z" transform="translate(-138.44 -18.87)"/><path className={styles.Letter}   d="M139.2,310.39l47.64-107.22h24.51l48.09,107.22h-26L194,215.73h10l-39.36,94.66Zm24.05-23,6.28-18.84H225l6.43,18.84Z" transform="translate(-138.44 -18.87)"/><path className={styles.Letter}   d="M290.68,310.39V266.58l5.67,15L249,203.17h26.5l36.15,60H296.5l36.31-60H357l-47,78.42,5.67-15v43.81Z" transform="translate(-138.44 -18.87)"/><path className={styles.Letter}   d="M139.2,494.19,186.84,387h24.51l48.09,107.22h-26L194,399.53h10l-39.36,94.66Zm24.05-23,6.28-18.84H225l6.43,18.84Z" transform="translate(-138.44 -18.87)"/><path className={styles.Letter}   d="M270.62,494.19V387h20.52l63.26,77.2h-9.95V387H369V494.19H348.43L285.17,417h10v77.2Z" transform="translate(-138.44 -18.87)"/>
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
