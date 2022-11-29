import React from "react";
import {
    HashRouter,
    Routes,
    Route
} from "react-router-dom";

import {
    Welcome,
    // NotFound,
    Login,
    Home,
} from '../screens';

import {
    enumNavigationLink
} from './interfaces';

export const Navigations:React.FC<any> = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path={enumNavigationLink.Connexion} element={<Login />} />
                <Route path={enumNavigationLink.Home} element={<Home />} />
                {/* <Route path='*' element={<NotFound />} /> */}

            </Routes>
        </HashRouter>
    )
}