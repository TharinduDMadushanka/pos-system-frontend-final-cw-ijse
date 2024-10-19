import React from 'react';
import { Button, Table } from 'react-bootstrap';
import './Cart.css';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
    // Calculate total amount based on unitPrice instead of price
    const totalAmount = cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0);

    return (
        <div className='cart'>
            <h3>Cart</h3>
            {cartItems.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.itemName}</td>
                                <td>${item.unitPrice.toFixed(2)}</td>
                                <td>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min="1"
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    />
                                </td>
                                <td>${(item.unitPrice * item.quantity).toFixed(2)}</td>
                                <td>
                                    <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>Your cart is empty.</p>
            )}
            <h4>Total: ${totalAmount.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;
