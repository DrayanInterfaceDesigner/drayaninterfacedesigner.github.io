import React from 'react'
import styles from '../styles/FitImage.module.scss'

const FitImage = ({src, alt = null, options = null}) => {
    const generic_alt = `Image for ${src.split('.').slice(0, -1).join('/')}`
    
    const _options = ["padding", "margin", "width"]
    const _4dir = ["padding", "margin"]
    const _styles = {}
    options ? Object.keys(options).forEach(key => {
        if(_options.includes(key)) {
            if(_4dir.includes(key)) _styles[key] = parse4DirAttribute(options[key])
            else _styles[key] = options[key]
        }
    }) : options

    return (
      <div 
        className={styles.FitImage}
        style={_styles}
      >
        <img className={styles.FitImage__image} src={src} alt={alt ? alt : generic_alt} />
      </div>
    )
}

const parse4DirAttribute = (attr) => {
    const s = attr.replace(/\s/g, "$").split("$")
    let style = [
        s[0],
        s[1],
        s[2] ? s[2] : s[0],
        s[3] ? s[3] : s[1]
    ]
    return `${style[0]} ${style[1]} ${style[2]} ${style[3]}`
}

export default FitImage
