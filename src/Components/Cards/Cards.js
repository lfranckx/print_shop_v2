import React, { Component } from 'react';
import './Cards.css'
import ItemsContext from '../../Contexts/ItemsContext';
import CardItem from './CardItem';

class Cards extends Component {
    static contextType = ItemsContext;

    renderCards() {
        const { items } = this.props;
        if (items.length === 0) {
            return (
                <div>Loading...</div>
            );
        }

        return items.map(item =>
            <CardItem 
                key={item.id}
                item={item}
            />
        );
    }

    render() {
        const { error } = this.context;
        return (
                <div className="cards__container">
                    <ul className="cards__list">
                        {error
                            ? <li><p className="error">There was an error try again</p></li>
                            : this.renderCards()
                        }
                    </ul>
                </div>
        )
    }
}

export default Cards;