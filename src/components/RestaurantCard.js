
import React from 'react';

const RestaurantCard = ({ restaurant }) => (
    <div className="restaurant-card">
        
        <h3>{restaurant.name}</h3>
        <p>{restaurant.cuisine}</p>
        <p>{restaurant.rating} ★</p>
    </div>
);

export default RestaurantCard;
