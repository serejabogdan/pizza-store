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

    isDeleteBtn() {
        if (this.props.isCart) {
            return (
                <div className="product-select__delete-btn">
                    <button type="button" className="btn-delete btn-select" onClick={this.onDeleteProduct}>Удалить</button>
                </div>
            );
        } else {
            return (
                <div className="product-select__select-btn">
                    <button type="button" className="btn-select" onClick={this.onAddProduct}>Выбрать</button>
                </div>
            );
        }
    }

    render() {
        console.log(this.props.isCart);
        return (
            <div className="product-select">
                <div className="product-select__cost">
                    <span>от {this.props.product.price} грн.</span>
                </div>
                {this.isDeleteBtn()}
            </div>
        );
    }
}

const mapDispatchToProps = {
    addProduct: addProduct,
    deleteProduct: deleteProduct
};

export default connect(null, mapDispatchToProps)(Select);