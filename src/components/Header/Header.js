import React from 'react';
import './Header.scss';
import logoPizza from './images/pizza-128.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function createNavLinks() {
    const navLinks = [
        {
            to: '/pizzas',
            name: 'Пицца'
        },
        {
            to: '/salads',
            name: 'Салаты'
        },
        {
            to: '/drinks',
            name: 'Напитки'
        }
    ];
    return navLinks.map(navLink => <li key={navLink.name}><NavLink to={navLink.to} activeClassName="active">{navLink.name}</NavLink></li>);
}

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="logo-title">
                        <img src={logoPizza} alt="logo" />

                        <div className="menu">
                            <div className="container">
                                <ul>
                                    {createNavLinks()}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header__basket">
                        <NavLink to="/cart"><button>КОРЗИНА | {props.cartLength}</button></NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = state => ({cartLength: state.cart.cartProducts.length});

export default connect(mapStateToProps, null)(Header);
