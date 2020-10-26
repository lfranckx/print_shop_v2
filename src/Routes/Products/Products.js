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
        const { error } = this.context;
        const { itemsList } = this.context;

        if (itemsList.length === 0) {
            return (
                <div className="loader">
                    <div className="spinner">Loading</div>
                </div>
            )
        }

        let filteredList = itemsList.filter(item => {
            return item.label.toLowerCase().indexOf(
                this.context.search.toLowerCase()
            ) !== -1;
        });

        return (
            <div className="main-container">
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
                                    
                                    <input type="text" placeholder="search for apparel" />
                                </form>
                            </div>
                        </div>
                    </div>
                        <Cards items={filteredList} />
                </div>
            </div>
        )
    }
}

export default Products;
