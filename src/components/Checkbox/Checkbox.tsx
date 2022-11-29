import React from "react";
import styles from './styles.module.css';
import { CheckboxProps } from "./interfaces";

export const Checkbox:React.FC<CheckboxProps> = ({
    placeholder,
    isSelected,
    onCheckboxPress
})=> {
    return (
        <div 
            className={styles.container}
            onClick={onCheckboxPress}
        >
            <label>{placeholder}</label>
            <div className={isSelected ? styles.active : styles.inactive } />
        </div>
    )
}