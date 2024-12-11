
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import RestaurantPage from './Pages/RestaurantPage';

const App = () => (
    <Router>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant/:id" element={<RestaurantPage />} />
            </Routes>
        </main>
        <Footer />
    </Router>
);

export default App;
