import React from "react";
import styles from './styles.module.css';
import { HomeProps } from "./interfaces";

import { 
    ScreenContainerConnected
} from "../../../connectedComponents";
import { enumNavigationLink } from "../../../navigations";

export const HomeComponent:React.FC<HomeProps> = ({

})=> {

    return (
        <ScreenContainerConnected
            activeItem={enumNavigationLink.Home}
        >
            <div>
                Home
            </div>
        </ScreenContainerConnected>
    )
}