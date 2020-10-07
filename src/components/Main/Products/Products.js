import React, { Component } from 'react';
import { Product } from './Product/Product';
import { ProductsService } from "../../../services/products.service";

import './Products.scss';

export default class Products extends Component {
    constructor() {
        super();
        this.state = { products: [] };
        const productsService = new ProductsService();
        this.service = productsService.create('test');
    }

    componentDidMount() {
        const productName = this.getProductnameFromUrl();
        const products = this.service.getArrayProducts(productName);
        this.setState(state => ({...state, products}));
    }

    getProductnameFromUrl = () => this.props.location.pathname.slice(1);

    productName() {
        const products = {
            pizzas: 'Пиццы',
            salads: 'Салаты',
            drinks: 'Напитки'
        };
        let productName = this.getProductnameFromUrl();
        productName = products[productName];
        return productName;
    };

    isProductsLength = () => this.state.products.length > 0 && this.state.products.map((product, index) => <Product product={product} key={index} />)

    render() {
        return (
            <div className="products-list">
                <div className="product-list__title title">
                    <h2>{this.productName()}</h2>
                </div>
                <div className="products">
                    { this.isProductsLength() }
                </div>
            </div>
        );
    }
}
