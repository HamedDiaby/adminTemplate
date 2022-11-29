import React from "react";
import styles from './styles.module.css';
import { inputProps } from "./interfaces";

export const Input:React.FC<inputProps> = ({
    placeholder,
    value,
    inputType,
    onchange,
    disabled = false,
})=> {
    return (
        <input 
            placeholder={placeholder}
            value={value}
            onChange={e=> onchange(e.target.value)}
            type={inputType}
            className={styles.inputStyle}
            disabled={disabled}
            style={disabled ? {
                background: 'lightgrey'
            } : {}}
        />
    )
}