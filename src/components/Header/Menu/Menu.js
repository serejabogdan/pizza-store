import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

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

export const Menu = () => {
    return (
        <nav className="header__menu">
            <ul className="list list-theme">
                {createNavLinks()}
            </ul>
        </nav>
    );
}