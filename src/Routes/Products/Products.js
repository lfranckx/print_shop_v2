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
            <>
                <div className="toolbar">
                    <div className="toolbar-header">
                        <h3>All Products</h3>
                    </div>
                    <div className="toolbar-search">
                        <div className="searchbar">
                            <form className="searchbar-form">
                                <i className="fas fa-search"></i>
                                <input type="text" />
                            </form>
                        </div>
                    </div>
                </div>
                    <Cards items={itemsList} />
            </>
        )
    }
}

export default Products;
