import React from 'react';
import './Main.scss';
import Products from './Products/Products';
import {Route, Switch, Redirect} from 'react-router-dom';

function generateRoutes(paths) {
    return paths.map(path => (
            <Route
                key={path}
                exact
                path={path}
                component={Products}
            />
        )
    );
}

const Main = (props) => {
    const paths = ["/pizzas", "/salads", "/drinks"];
    return (
        <main className="Main">
            <div className="container">
                <Switch>
                    {generateRoutes(paths)}
                    <Redirect to="/pizzas" />
                </Switch>
            </div>
        </main>
    );
}

export default Main;
