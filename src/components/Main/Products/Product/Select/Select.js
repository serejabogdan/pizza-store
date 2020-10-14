import React from 'react';
import { connect } from 'react-redux';
import { addProduct, deleteProduct, changleProductAmount } from '../../../../../redux/actions';
import './Select.scss';

class Select extends React.Component {
    constructor(props) {
        super();
        this.state = {
            product: props.product
        };
    }

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

    amountOfProduct(targetValue) {
        const isNumber = /[1-9]/g;
        const amount = targetValue.match(isNumber) || [1];
        return amount.join('');
    }

    onChangeProductAmount = (event) => {
        event.persist();
        const targetValue = event.target.value;
        const amount = this.amountOfProduct(targetValue);

        this.setState(prevState => {
            return {
                product: {
                    ...prevState.product,
                    ...{amount}
                }
            };
        });

        const product = {
            name: this.props.product.name,
            amount
        };
        
        this.props.changleProductAmount(product);
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
                {
                    this.props.isCart &&
                    <div className="product-select__pizza-amount">
                        <input type="text" value={this.state.product.amount} onChange={this.onChangeProductAmount} maxLength="2" />
                    </div>
                }
                <div className="product-select__select-btn">
                    {this.isCartButton()}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addProduct: addProduct,
    deleteProduct: deleteProduct,
    changleProductAmount: changleProductAmount
};

export default connect(null, mapDispatchToProps)(Select);
