
import React, { useState, useEffect } from 'react';
import RestaurantList from '../components/RestaurantList';

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        // Mock data; replace with API call in real app
        const mockData = [
            { id: 1, name: "Pizza Palace", cuisine: "Indian", rating: 4.5,  },
            { id: 2, name: "Sushi World", cuisine: "Japanese", rating: 4.7,  },
        ];
        setRestaurants(mockData);
    }, []);

    return (
        <div>
            <h1>Restaurants Near You</h1>
            <RestaurantList restaurants={restaurants} />
        </div>
    );
};

export default Home;
