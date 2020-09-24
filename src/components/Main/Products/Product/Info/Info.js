import React from 'react';
import './Info.scss'

export const Info = (props) => {
    const {imgUrl, name, description} = props.product;
    return (
        <div className="product-info">
            <div className="product-img">
                <img src={imgUrl} alt={name} />
            </div>
            <div className="product-description">
                <div className="product-description__title title">
                    <h3>{name}</h3>
                    <div className="product-description__consists">
                        <span>{description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
