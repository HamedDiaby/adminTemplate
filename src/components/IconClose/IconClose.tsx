import React from "react";
import styles from './styles.module.css';
import { IconCloseProps } from "./interfaces";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const IconClose:React.FC<IconCloseProps> = ({
    onIconPress
})=> {
    return (
        <label
            onClick={onIconPress}
            className={styles.close}
        >
            <FontAwesomeIcon 
                icon={faXmark}
            />
        </label>
    )
}