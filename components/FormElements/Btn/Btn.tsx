import * as React from 'react'
import styles from './Btn.module.scss'
import {TBtn} from './Btn.types'


export const Btn:React.FC<TBtn> = (props) => {
    
    const {type, children, target, url, click, bg, disabled} = props

    switch(type) {
            case 'btn': 
                return <button className={`${styles.btn} ${styles['btn-' + bg]}`} disabled={disabled} onClick={click}>{children}</button>;
            case 'link': 
                return <a href={url} target={target}  className={`${styles.btn} ${styles['btn-'+ bg]}`} onClick={click}>{children}</a>; 
            default:    
                return <button className={`${styles.btn} ${styles['btn-'+ bg]}`} disabled={disabled} onClick={click}>{children}</button>;  
    } 

}