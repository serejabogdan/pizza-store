import React from 'react';
import './Product.scss';
import { Info } from './Info/Info';
import Select from './Select/Select';

export const Product = (props) => {
    const { name, imgUrl, description } = props.product;
    return (
        <div className="Product">
            <Info product={{ name, imgUrl, description }} />
            <Select isCart={props.isCart} product={props.product} />
        </div>
    );
}
