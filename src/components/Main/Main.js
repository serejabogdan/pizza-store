import React from 'react';
import './Main.scss';
import Products from './Products/Products';
import {Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';
import Cart from './Cart/Cart';

function generateRoutes(paths) {
  return paths.map((path) => <Route key={path} exact path={path} component={Products} />);
}

const Main = (props) => {
  let match = useRouteMatch();
  console.log(match);
  const paths = [`${match.url}pizzas`, `${match.url}salads`, `${match.url}drinks`];
  return (
    <main className="Main">
      <div className="container">
        <Switch>
          {generateRoutes(paths)}
          <Route exact path={`${match.url}cart`} component={Cart} />
          <Redirect to={`${match.url}pizzas`} />
        </Switch>
      </div>
    </main>
  );
};

export default Main;
