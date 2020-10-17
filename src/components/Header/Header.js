import React from 'react';
import './Header.scss';
import logoPizza from '../../assets/pizza-128.png';
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
    return navLinks.map(navLink =>
        <li className="list__item" key={navLink.name}>
            <NavLink to={navLink.to} className="list__link link link-theme" activeClassName="link_active">{navLink.name}</NavLink>
        </li>
    );
}

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img className="logo" src={logoPizza} alt="logo" />
                    </div>

                    <nav className="header__menu">
                        <ul className="header__list list list-theme">
                            {createNavLinks()}
                        </ul>
                    </nav>

                    <div className="header__cart">
                        <NavLink to="/cart" activeClassName="link-active"><button className="cart__link link link-theme">КОРЗИНА | {props.cartLength}</button></NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = state => ({ cartLength: state.cart.cartProducts.length });

export default connect(mapStateToProps, null)(Header);
