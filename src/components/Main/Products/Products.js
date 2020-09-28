import React, { Component } from 'react';
import { Product } from './Product/Product';
import { ProductsService } from "../../../services/products.service";

import './Products.scss';

export default class Products extends Component {
    constructor() {
        super();
        this.state = { products: [] };
        this.productsService = new ProductsService();
    }

    componentDidMount() {
        const productName = this.productName();
        const products = this.productsService.getArrayProducts(productName);
        this.setState(state => ({...state, products}));
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
                        this.state.products.length > 0 &&
                        this.state.products.map((product, index) => <Product product={product} key={index} />)
                    }
                </div>
            </div>
        );
    }
}
