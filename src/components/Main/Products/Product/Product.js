import React from 'react';
import './Product.scss';
import { Info } from './Info/Info';
import { Select } from './Select/Select';

export const Product = (props) => {
    const {name, imgUrl, description, price} = props.product;
    return (
        <div className="products-product">
            <Info product={{name, imgUrl, description}}/>
            <Select price={price}/>
        </div>
    );
}
