import React, {Component} from 'react';
import {Product} from './Product/Product';
import {ProductsService} from '../../../services/products.service';
import {Page} from '../Page/Page';

import './Products.scss';

export default class Products extends Component {
  constructor() {
    super();
    this.state = {products: []};
    const productsService = new ProductsService();
    this.service = productsService.create('test');
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const productName = this.getProductnameFromUrl();
    const products = await this.service.getArrayProducts(productName);
    this.setState((state) => ({...state, products}));
  }

  getProductnameFromUrl = () => this.props.location.pathname.slice(1);

  productName() {
    const productsName = {
      pizzas: 'Пицца',
      salads: 'Салаты',
      drinks: 'Напитки'
    };
    let productName = this.getProductnameFromUrl();
    productName = productsName[productName];
    return productName;
  }

  isProductsLength = () =>
    this.state.products.length > 0 &&
    this.state.products.map((product, index) => <Product product={product} key={index} />);

  render() {
    const title = this.productName();
    const products = this.isProductsLength();
    return <Page cart={{isCart: false}} title={title} content={products} />;
  }
}
