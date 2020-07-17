import * as React from 'react';
import styles from './Checkbox.module.scss'
import {useEffect, useState} from "react";

type TCheckbox = {
    label: string,
    value?: any,
    checked?: boolean,
    onClick?: () => void
    onchange?: (value?: any, check?: any) => void
}

export const Checkbox:React.FC<TCheckbox> = ({value, label, onchange}) => {

    const [checkedVal, setCheckedVal] = useState(false)

    const onChangeHandler = () => {
        setCheckedVal(!checkedVal)
    }

    useEffect(() => {
        if(onchange) {
            onchange(value, checkedVal)
        }
    }, [checkedVal])

    return (
        <label className={styles.checkbox}>
            <input onChange={onChangeHandler} type="checkbox" name="" value={value} checked={checkedVal} id=""/>
            <div className={styles.checkboxCheck}></div>
            {label}
        </label>
    )
}