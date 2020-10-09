import React from 'react';
import './Cart.scss';

export const Cart = () => {
    return (
        <div className="ProductsList">
            <div className="product__title title">
                <h2>Cart</h2>
            </div>
            <div className="products">
                <h1>Products</h1>
            </div>
            <div className="total">
                Общая сумма к оплате: 0 грн.
            </div>
            <hr/>
            <div className="form-end">
                <h3>Форма оформления заказа</h3>
                <div className="form-group-flex">
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Имя</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Ольга"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Телефон</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="0993334455"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Улица и номер дома</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Украинская, 24"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Квартира</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="124"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Подъезд</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="1"/>
                    </div>
                </div>
            </div>
            <button type="button" className="btn-select">Оформить</button>
       </div>
    );
}