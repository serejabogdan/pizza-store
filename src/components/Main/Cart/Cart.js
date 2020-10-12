import React from 'react';
import './Cart.scss';
import { Product } from '../Products/Product/Product';
import { connect } from 'react-redux';

const Cart = (props) => {
    const {cartProducts} = props;
    return (
        <div className="ProductsList">
            <div className="product__title title">
                <h2>Корзина</h2>
            </div>
            <div className="products">
                {cartProducts.map((product, index) => <Product product={product} key={index} />)}
            </div>
            <div className="total">
                Общая сумма к оплате: {cartProducts.reduce((accumulate, current) => accumulate + current.price, 0)} грн.
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    const { cartProducts } = state.cart;
    return { cartProducts };
}

export default connect(mapStateToProps, null)(Cart);
