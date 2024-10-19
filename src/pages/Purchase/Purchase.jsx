import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Purchase = ({ cartItems }) => {
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handlePurchase = async () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const order = {
            items: cartItems.map(item => ({
                id: item.id,
                quantity: item.quantity,
            })),
            totalAmount,
        };

        try {
            const response = await axios.post('http://localhost:8080/orders', order); // Adjust endpoint as necessary
            alert('Order placed successfully!');
            // You may want to reset the cart here or redirect the user
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order.');
        }
    };

    return (
        <Button variant="success" onClick={handlePurchase}>
            Purchase
        </Button>
    );
};

export default Purchase;
