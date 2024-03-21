
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Componentes/auth/Login';

const Routes = () => {
    return (
        <Router>
            <Route path='/teste' component={Teste}/>
            <Route path='/login' component={Login}/>
            <Route path='/telainicial' component={TelaInicial}/>
        </Router>
    );
};

export default Routes;

