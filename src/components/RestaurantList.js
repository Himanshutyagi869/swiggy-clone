
import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants }) => (
    <div className="restaurant-list">
        {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
    </div>
);

export default RestaurantList;
