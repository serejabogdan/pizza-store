import React from 'react';
import './Info.scss';

export const Info = (props) => {
    const { imgUrl, name, description } = props.product;
    return (
        <div className="Info">
            <div className="Info__img">
                <img className="img" src={imgUrl} alt={name} />
            </div>
            <div className="Info__description description">
                <h3 className="description__title">{name}</h3>
                <div className="description__content">
                    <span className="content">{description}</span>
                </div>
            </div>
        </div>
    );
}
