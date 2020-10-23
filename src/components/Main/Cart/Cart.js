import React from "react";
import "./Cart.scss";
import { connect } from "react-redux";

import { Page } from "../Page/Page";
import { Product } from "../Products/Product/Product";

const cartContent = (products) =>
  products.map((product) => (
    <Product isCart={true} product={product} key={product.name} />
  )
);

const getTotalPrice = (cartProducts) => {
    return (
        <div className="total">
            Общая сумма к оплате: {cartProducts.length && cartProducts.reduce((acc, current) => acc + current.price * current.amount, 0)} грн.
        </div>
    );
};

const Cart = (props) => {
  const { cartProducts } = props;
  const content = cartContent(cartProducts);
  const totalPrice = getTotalPrice(cartProducts)
  return (
      <Page cart={{isCart: true, totalPrice}} title={"Корзина"} content={content} />
  );
};

const mapStateToProps = (state) => {
  const { cartProducts } = state.cart;
  return { cartProducts };
};

export default connect(mapStateToProps, null)(Cart);
