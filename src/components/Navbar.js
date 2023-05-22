import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import { setCookie, parseCookies } from 'nookies'

const Navbar = ({lastActiveButton}) => {
  const [onBtn, setActive] = useState(lastActiveButton )

  useEffect(() => {
    const cookies = parseCookies()
    const lastActiveButton = cookies.lastActiveButton
    if(!lastActiveButton) {
      setActive(1)
    }
    if (lastActiveButton) {
      setActive(Number(lastActiveButton))
    }
  }, [])

  const handleActive = (n) => {
    setActive(n)
    setCookie(null, 'lastActiveButton', n.toString(), { maxAge: 30 * 24 * 60 * 60, path: '/' })
  }

  return (
    <nav className={styles.Navbar}>
        <div className={styles.Navbar__container}>
          <Link 
            data-tooltip="home"
            onClick={() => handleActive(1)} 
            className={`material-symbols-outlined ${styles.option} ${onBtn == 1? styles.active : ''}`} 
            href='/'>window
          </Link>
          <Link 
            data-tooltip="projects"
            onClick={() => handleActive(2)} 
            className={`material-symbols-outlined ${styles.option} ${onBtn == 2? styles.active : ''}`} 
            href='/projects'>handyman
            </Link>
          <Link 
            data-tooltip="articles"
            onClick={() => handleActive(3)} 
            className={`material-symbols-outlined ${styles.option} ${onBtn == 3? styles.active : ''}`} 
            href='/articles'>article
          </Link>
          <Link 
            data-tooltip="contact"
            onClick={() => handleActive(4)} 
            className={`material-symbols-outlined ${styles.option} ${onBtn == 4? styles.active_brilliant : styles.brilliant}`} 
            href='/contact'>mail
          </Link>
        <span className={styles.follow__bar}></span>
        </div>
    </nav>
  )
}


export default Navbar
