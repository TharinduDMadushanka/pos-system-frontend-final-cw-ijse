import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import ItemCategory from './pages/ItemCategory/ItemCategory';
import Item from './pages/Item/Item';
import Stock from './pages/Stock/Stock';
import { Container, Row, Col } from 'react-bootstrap';
import Cart from './pages/Cart/Cart';
import ItemList from './pages/ItemList/ItemList';
import Purchase from './pages/Purchase/Purchase'; // New Purchase component

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        console.log('Adding to cart:', item); // For debugging
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            // Ensure you're adding the correct properties to the cart item
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };
    

    const updateQuantity = (id, quantity) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/categories' element={<ItemCategory />} />
                    <Route path='/item' element={<Item />} />
                    <Route path='/stock' element={<Stock />} />
                    <Route path='/cart' element={
                        <Row>
                            <Col md={8}>
                                <ItemList addToCart={addToCart} />
                            </Col>
                            <Col md={4}>
                                <Cart cartItems={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
                                <Purchase cartItems={cart} /> {/* Integrate Purchase component */}
                            </Col>
                        </Row>
                    } />
                </Routes>
            </BrowserRouter>
        </Container>
    );
};

export default App;
