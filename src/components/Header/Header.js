import React from 'react';
import './Header.scss';
import logoPizza from './images/pizza-128.png';
import {NavLink, Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="logo-title">
                        <img src={logoPizza} alt="logo"/>
                        
                        <div className="menu">
                            <div className="container">
                                <ul>
                                    <li><NavLink to="/pizzas" activeClassName="active">Пицца</NavLink></li>
                                    <li><NavLink to="/salads" activeClassName="active">Салаты</NavLink></li>
                                    <li><NavLink to="/drinks" activeClassName="active">Напитки</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header__basket">
                        <Link to="/cart"><button>КОРЗИНА | {props.cartLength}</button></Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
