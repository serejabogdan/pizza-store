import React from 'react';
import { connect } from 'react-redux';
import { addProduct, deleteProduct } from '../../../../../redux/actions';
import './Select.scss';

class Select extends React.Component {
    onAddProduct = () => {
        this.props.addProduct(this.props.product);
    }

    onDeleteProduct = () => {
        this.props.deleteProduct(this.props.product);
    }

    isCartButton() {
        return this.props.isCart ?
            <button type="button" className="btn-delete btn-select" onClick={this.onDeleteProduct}>Удалить</button> :
            <button type="button" className="btn-select" onClick={this.onAddProduct}>Выбрать</button>;
    }

    render() {
        return (
            <div className="product-select">
                <div className="product-select__cost">
                    <span>
                        {!this.props.isCart && 'от '}
                        {this.props.product.price} грн.
                    </span>
                </div>
                {this.props.isCart && <input type="text" className="product-select__pizza-amount" />}
                <div className="product-select__select-btn">
                    {this.isCartButton()}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addProduct: addProduct,
    deleteProduct: deleteProduct
};

export default connect(null, mapDispatchToProps)(Select);
