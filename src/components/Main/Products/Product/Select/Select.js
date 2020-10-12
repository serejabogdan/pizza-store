import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../../../../redux/actions';
import './Select.scss';

class Select extends React.Component {
    onAddProduct = () => {
        this.props.addProduct(this.props.product);
    }

    render() {
        return (
            <div className="product-select">
                <div className="product-select__cost">
                    <span>от {this.props.product.price} грн.</span>
                </div>
                <div className="product-select__select-btn">
                    <button type="button" className="btn-select" onClick={this.onAddProduct}>Выбрать</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addProduct: addProduct
};

export default connect(null, mapDispatchToProps)(Select);