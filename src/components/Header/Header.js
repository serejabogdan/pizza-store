import React from 'react';
import logoPizza from '../../assets/pizza-128.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from './Menu/Menu';
import './Header.scss';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img className="logo" src={logoPizza} alt="logo" />
                    </div>
                    <Menu />
                    <div className="header__cart">
                        <NavLink to="/cart"><button className="cart__link link link-theme">КОРЗИНА | {props.cartLength}</button></NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = state => ({ cartLength: state.cart.cartProducts.length });

export default connect(mapStateToProps, null)(Header);
