import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* O exact serve para entender que só aparecerá
                a página de login, se na barra de navegação estiver escrito 
                exatamente só a barra /, se não ele entenderá como "se começa com a
                barra é a página de login" */}
                <Route path="/" exact component={Logon} /> 
                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}