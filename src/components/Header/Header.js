import React from 'react';
import './Header.scss';
import logoPizza from './images/pizza-128.png';

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
                                    <li><a href="/pizzas">Пицца</a></li>
                                    <li><a href="/salads">Салаты</a></li>
                                    <li><a href="/drinks">Напитки</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header__basket">
                        <a href="/cart"><button>КОРЗИНА | {props.cartLength}</button></a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;