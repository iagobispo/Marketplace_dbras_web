import React from 'react';

import Home from './pages/Home';
import Carrinho from './pages/carrinho'; 
import Add from './pages/add';
import Favorite from './pages/favoritos';

import {Switch, Route} from 'react-router-dom';

export const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/carrinho' component={Carrinho} exact/>
            <Route path='/add' component={Add} exact />
            <Route path='/favorite' component={Favorite} exact/>
            <Route component={() => <div>Page 404!</div>} />

        </Switch>
    );
};