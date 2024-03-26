
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Componentes/auth/Login';
import TelaAtividade from '../TelaAtividade';
import TelaGit from '../Telas/UploadGit/TelaGit';

const Routes = () => {
    return (
        <Router>
            <Route path='/teste' component={Teste}/>
            <Route path='/login' component={Login}/>
            <Route path='/telainicial' component={TelaInicial}/>
            <Route path='/telaatividade' component={TelaAtividade}/>
            <Route path='/telagit' component={TelaGit}/>
        </Router>
    );
};

export default Routes;

