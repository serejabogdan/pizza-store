import React from 'react';
import './Main.scss';

import Products from './Products/Products';

const Main = (props) => {
    return (
        <main className="Main">
            <div className="container">
                <Products />
            </div>
        </main>
    );
}

export default Main;
