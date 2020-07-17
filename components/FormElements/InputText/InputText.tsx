import * as React from 'react'
import styles from './InputText.module.scss'
import {TInputText} from './InputText.types'

export const InputText: React.FC <TInputText>  = (props) => {

    const {value, change, plaseholder, name} = props;

    return (
        <input type="text" name={name} placeholder={plaseholder} className={styles.inputText} onChange={change} value={value} />
    ) 
}