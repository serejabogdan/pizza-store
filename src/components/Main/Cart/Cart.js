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
                {cartProducts.map((product) => <Product isCart={true} product={product} key={product.name} />)}
            </div>
            <div className="total">
                Общая сумма к оплате: {cartProducts.length && cartProducts.reduce((acc, current) => acc + current.price * current.amount, 0)} грн.
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    const { cartProducts } = state.cart;
    return { cartProducts };
}

export default connect(mapStateToProps, null)(Cart);
