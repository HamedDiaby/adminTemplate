import React, { useEffect } from "react";
import {
    useNavigate
} from 'react-router-dom';
import { enumNavigationLink } from "../../navigations";

export const Welcome:React.FC<any> = ({

})=> {

    let navigate = useNavigate();

    useEffect(()=> {
        navigate(enumNavigationLink.Connexion);
    }, []);

    return (
        <div>
            welcome
        </div>
    )
}