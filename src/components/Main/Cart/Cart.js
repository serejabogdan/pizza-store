import React from 'react';
import './Cart.scss';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../Products/Product/Product';

export const Cart = () => {
    const productsService = new ProductsService();
    const service = productsService.create('test');
    const products = service.getArrayProducts('pizzas');
    return (
        <div className="ProductsList">
            <div className="product__title title">
                <h2>Корзина</h2>
            </div>
            <div className="products">
                {products.map((product, index) => <Product product={product} key={index} />)}
            </div>
            <div className="total">
                Общая сумма к оплате: 0 грн.
            </div>
        </div>
    );
}
