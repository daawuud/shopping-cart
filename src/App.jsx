import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
    const [showProductList, setShowProductList] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const handleGetStartedClick = () => {
        setShowProductList(true);
        setShowCart(false); // Make sure to hide cart when switching to product list
    };

    const handleShowCart = () => {
        setShowCart(true);
        setShowProductList(false); // Ensure product list is hidden
    };

    const handleBackToHome = () => {
        setShowProductList(false);
        setShowCart(false);
    };

    return (
        <div className="app-container">
            {/* Navbar */}
            <div className="navbar" style={{ backgroundColor: '#4CAF50', padding: '15px' }}>
                <h1>Paradise Nursery</h1>
                <div className="nav-links">
                    <button onClick={handleBackToHome}>Home</button>
                    <button onClick={handleGetStartedClick}>Plants</button>
                    <button onClick={handleShowCart}>Cart</button>
                </div>
            </div>

            {/* Conditional Rendering for Pages */}
            {!showProductList && !showCart && (
                <div className="landing-page">
                    <div className="background-image"></div>
                    <div className="content">
                        <div className="landing_content">
                            <h1>Welcome To Paradise Nursery</h1>
                            <div className="divider"></div>
                            <p>Where Green Meets Serenity</p>
                            <button className="get-started-button" onClick={handleGetStartedClick}>
                                Get Started
                            </button>
                        </div>
                        <div className="aboutus_container">
                            <AboutUs />
                        </div>
                    </div>
                </div>
            )}

            {showProductList && !showCart && (
                <div className="product-list-container">
                    <ProductList />
                </div>
            )}

            {showCart && (
                <div className="cart-container">
                    <CartItem />
                </div>
            )}
        </div>
    );
}

export default App;
