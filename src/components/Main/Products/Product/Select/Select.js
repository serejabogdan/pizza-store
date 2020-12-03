import React from 'react';
import { connect } from 'react-redux';
import { addProduct, deleteProduct, changeProductAmount } from '../../../../../redux/actions';
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
            <button type="button" className="button-item theme-button" onClick={this.onDeleteProduct}>Удалить</button> :
            <button type="button" className="button-item theme-button" onClick={this.onAddProduct}>Выбрать</button>;
    }

    amountOfProduct(targetValue) {
        const isNumber = /[1-9]/g;
        const amount = targetValue.match(isNumber) || [''];
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
        
        this.props.changeProductAmount(product);
    }

    render() {
        return (
            <div className="Select">
                <div className="Select__cost">
                    <span className="cost">
                        {!this.props.isCart && 'от '}
                        {this.props.product.price} грн.
                    </span>
                </div>
                {
                    this.props.isCart &&
                    <div className="Select__amount">
                        <input className="pizza-amount" type="text" value={this.state.product.amount} onChange={this.onChangeProductAmount} maxLength="2" />
                    </div>
                }
                <div className="Select__buttons">
                    {this.isCartButton()}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addProduct: addProduct,
    deleteProduct: deleteProduct,
    changeProductAmount: changeProductAmount
};

export default connect(null, mapDispatchToProps)(Select);
