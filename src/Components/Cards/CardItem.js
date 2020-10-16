import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemsContext from '../../Contexts/ItemsContext';

export default class CardsItem extends Component {
    static contextType = ItemsContext;

    render() {
        const { item } = this.props;
        return (
            <li className="cards__item">
                 <Link className="cards__item__link" to={item.path}>
                     <figure 
                         className="cards__item__pic-wrap" 
                         data-category={item.label}
                     >
                         <img src={item.src} alt={item.alt} 
                             className="cards__item__img" />
                     </figure>
                     <div className="cards__item__info">
                         <h5 className="cards__item__text">{item.text}</h5>
                     </div>
                 </Link>
             </li>
        )
    }
}