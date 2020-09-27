import React, {Component} from 'react';
import {Product} from './Product/Product';

import './Products.scss';

export default class Products extends Component {
    constructor() {
        super();
        this.products = [
            {
                imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                name: 'Четыре сыра',
                description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                price: 99
            },
            {
                imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                name: 'Четыре сыра',
                description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                price: 99
            },
            {
                imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                name: 'Четыре сыра',
                description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                price: 99
            },
            {
                imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                name: 'Четыре сыра',
                description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                price: 99
            },
            {
                imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                name: 'Четыре сыра',
                description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                price: 99
            },
            {
                imgUrl: 'https://chizpizza.com.ua/image/cache/catalog/478/4sira-478x478.jpg',
                name: 'Четыре сыра',
                description: 'Сырный соус, сыр дор блю, моцарелла,чедр, пармезан, итальянские травы.',
                price: 99
            }
        ];
    }

    productName = () => this.props.location.pathname.slice(1);
    
    render() {
        return (
            <div className="products-list">
                <div className="product-list__title title">
                    <h2>{this.productName()}</h2>
                </div>
                <div className="products">
                    {
                        this.products.length > 0 &&
                            this.products.map((product, index) => <Product product={product} key={index}/>)
                    }
                </div>
           </div>
        );
    }
}
