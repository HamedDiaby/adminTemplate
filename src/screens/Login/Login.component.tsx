import React, { useState } from "react";
import style from './styles.module.css';
import { LoginProps } from "./interfaces";
import {
    useNavigate
} from 'react-router-dom';
import { enumNavigationLink } from "../../navigations";
import { 
    Button,
    Input
} from "../../components";

export const LoginComponent:React.FC<LoginProps> = ({

})=> {

    let navigate = useNavigate();
    const [identifiant, setIdentifiant] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className={style.container} >
            <div className={style.subContainer} >

                <h2 className={style.title} >
                    connexion
                </h2>

                <div className={style.inputContainer} >
                    <Input 
                        placeholder="Identifiant"
                        value={identifiant}
                        inputType='text'
                        onchange={e=> setIdentifiant(e)}
                    />
                    <Input 
                        placeholder="Mot de passe"
                        value={password}
                        inputType='password'
                        onchange={e=> setPassword(e)}
                    />
                </div>

                <p
                    className={style.forgotPassword}
                >
                    Mot de passe oublier ?
                </p>

                <Button 
                    buttonName="Connexion"
                    onButtonPress={()=> {
                        navigate(enumNavigationLink.Home);
                    }}
                />
            </div>
        </div>
    )
}