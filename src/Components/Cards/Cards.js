import React, { Component } from 'react';
import './Cards.css'
import dummy from '../../dummystore';
import ItemsContext from '../../Contexts/ItemsContext';
import CardItem from './CardItem';

class Cards extends Component {
    static contextType = ItemsContext;

    componentDidMount() {
        this.context.clearError();
        this.context.setItemsList(dummy.shirts);
    }

    renderCards() {
        const { itemsList } = this.context;
        console.log('context itemsList', itemsList);
        if (itemsList.length === 0) {
            return (
                <div>Loading...</div>
            );
        }
        console.log('context itemsList', itemsList);

        return itemsList.map(item =>
            <CardItem 
                key={item.id}
                item={item}
            />
        );
    }

    render() {
        const { error } = this.context;
        return (
            <div className="cards">
                <h3>Check out our Custom Products!</h3>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            {error
                                ? <li><p className="error">There was an error try again</p></li>
                                : this.renderCards()
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;