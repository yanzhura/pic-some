import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import Photos from '../pages/Photos';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </>
    );
};

export default Router;
