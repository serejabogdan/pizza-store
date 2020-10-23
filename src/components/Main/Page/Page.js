import React from 'react';
import './Page.scss';

const cartRender = ({isCart, totalPrice}) => isCart && totalPrice;

export const Page = (props) => {
    return (
        <div className="Page">
            <div className="Page__title">
                <h2 className="title">{props.title}</h2>
            </div>
            <div className="Page__content">
                { props.content }
            </div>
            {
                cartRender(props.cart)
            }
        </div>
    );
};
