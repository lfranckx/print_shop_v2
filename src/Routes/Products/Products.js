import React, { Component } from 'react';
import './Products.css';
import Cards from '../../Components/Cards/Cards';
import ItemsContext from '../../Contexts/ItemsContext';
import dummy from '../../dummystore';

class Products extends Component {
    static contextType = ItemsContext

    componentDidMount() {
        this.context.clearError();
        this.context.setItemsList(dummy.shirts);
    }

    render() {
        const { itemsList } = this.context;

        return (
            <div className="products-container">
                <div className="toolbar">
                    <div className="toolbar-header">
                        <h1>All Products</h1>
                    </div>
                    <div className="toolbar-search">
                        <div className="searchbar">
                            <form className="searchbar-form">
                                <button className="searchbar-button">
                                    <i className="fas fa-search"></i>
                                </button>
                                
                                <input type="text" />
                            </form>
                        </div>
                    </div>
                </div>
                    <Cards items={itemsList} />
            </div>
        )
    }
}

export default Products;
