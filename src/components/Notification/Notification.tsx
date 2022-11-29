import React from "react";
import styles from './styles.module.css';
import { NotificationProps } from "./interfaces";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const Notification:React.FC<NotificationProps> = ({
    notificationMessage,
    notificationType,
    onClose
})=> {
    return (
        <div 
            className={styles.container}
            style={
                notificationType === 'success' ? {
                        color: '#55a630',
                        backgroundColor: '#55a6307e',
                } : notificationType === 'error' ? {
                    color: '#d00000',
                    backgroundColor: '#d000007e',
                } : notificationType === 'alert' ? {
                    color: '#ffba08',
                    backgroundColor: '#ffba087e',
                } : {}
            }
        >
            <p>{notificationMessage}</p>
            {/* <label 
                className={styles.closeIcon}
                onClick={onClose}
            >
                <FontAwesomeIcon 
                    icon={faXmark}
                />
            </label> */}
        </div>
    )
}