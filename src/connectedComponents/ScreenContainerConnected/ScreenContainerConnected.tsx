import React from "react";
import styles from './styles.module.css';
import { ScreenContainerConnectedProps } from "./interfaces";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faHouse, faListCheck, faUsers } from '@fortawesome/free-solid-svg-icons';
import { enumNavigationLink } from "../../navigations";
import { useNavigate } from "react-router-dom";

export const ScreenContainerConnected:React.FC<ScreenContainerConnectedProps> = ({
    children,
    activeItem
})=> {

    let navigate = useNavigate();

    const itemList = [
        {
            name: 'Accueil',
            icon: faHouse,
            link: enumNavigationLink.Home,
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.contentLeft}>
                <ul>
                    {
                        itemList.map((el, i)=> {
                            return (
                                <li 
                                    className={
                                        el.link === activeItem ? 
                                        styles.listItemActive : styles.listItem
                                    }
                                    onClick={()=> navigate(el.link)}
                                >
                                    <FontAwesomeIcon 
                                        icon={el.icon} 
                                        color={
                                            el.link === activeItem ? 
                                            '#001d3d' : '#ffc300'
                                        }
                                    />
                                    <p 
                                        className={
                                            el.link === activeItem ? 
                                            styles.listItemTextActive : styles.listItemText
                                        }
                                    >
                                        {el.name}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={styles.contentRight}>
                {children}
            </div>
        </div>
    )
}