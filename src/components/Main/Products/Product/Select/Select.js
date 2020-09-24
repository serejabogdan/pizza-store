import React from 'react';
import './Select.scss';

export const Select = (props) => {
    return (
        <div className="product-select">
            <div className="product-select__cost">
                <span>от {props.price} грн.</span>
            </div>
            <div className="product-select__select-btn">
                <button type="button" className="btn-select">Выбрать</button>
            </div>
        </div>
    );
}
