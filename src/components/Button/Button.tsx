import React from "react";
import styles from './styles.module.css';
import { ButtonProps } from "./interfaces";

export const Button:React.FC<ButtonProps> = ({
    buttonName,
    disabled = false,
    customButtonStyle,
    isCancelButton,
    onButtonPress,
})=> {
    return (
        <button 
            className={styles.buttonStyle}
            style={isCancelButton ? {
                backgroundColor: '#c5c3c6',
                color: '#4A4A4A'
            } : customButtonStyle}
            onClick={onButtonPress}
            disabled={disabled}
        >
            {buttonName}
        </button>
    )
}