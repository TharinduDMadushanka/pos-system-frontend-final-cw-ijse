import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Item.css';

const Item = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [itemCode, setItemCode] = useState('');
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [qty, setQty] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [editingItemId, setEditingItemId] = useState(null); // For edit mode
    const [isEditing, setIsEditing] = useState(false); // Toggle between add/update mode

    // Base URL for your API
    const baseURL = 'http://localhost:8080';

    // Fetch items and categories on component load
    useEffect(() => {
        fetchItems();
        fetchCategories();
    }, []);

    // Fetch all items
    const fetchItems = async () => {
        try {
            const response = await axios.get(`${baseURL}/items`);
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items', error);
        }
    };

    // Fetch all categories for dropdown
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${baseURL}/categories`);
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories', error);
        }
    };

    // Handle form submission (add or update item)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const itemData = {
            itemCode,
            itemName,
            description,
            qty: parseInt(qty), // Ensure qty is an integer
            unitPrice: parseFloat(unitPrice), // Ensure unitPrice is a number
            categoryId: selectedCategory // Send category id to backend
        };

        try {
            if (isEditing) {
                // Update item
                await axios.put(`${baseURL}/items/${editingItemId}`, itemData);
            } else {
                // Create new item
                await axios.post(`${baseURL}/items`, itemData);
            }

            // Reset form
            setItemCode('');
            setItemName('');
            setDescription('');
            setQty('');
            setUnitPrice('');
            setSelectedCategory('');
            setIsEditing(false);
            setEditingItemId(null);

            // Refresh item list
            fetchItems();
        } catch (error) {
            console.error('Error saving item', error);
        }
    };

    // Handle delete
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseURL}/items/${id}`);
            fetchItems(); // Refresh item list after delete
        } catch (error) {
            console.error('Error deleting item', error);
        }
    };

    // Handle row click (for edit)
    const handleRowClick = (item) => {
        setItemCode(item.itemCode);
        setItemName(item.itemName);
        setDescription(item.description);
        setQty(item.qty);
        setUnitPrice(item.unitPrice);
        setSelectedCategory(item.category.id); // Set selected category by id
        setIsEditing(true);
        setEditingItemId(item.id);
    };

    return (
        <div className="item">
            <h1>Item Section</h1>

            <div className="form-section">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Item Code</label>
                        <input type="text" className="form-control" value={itemCode} onChange={(e) => setItemCode(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Item Name</label>
                        <input type="text" className="form-control" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">QTY</label>
                        <input type="number" className="form-control" value={qty} onChange={(e) => setQty(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Unit Price</label>
                        <input type="number" step="0.01" className="form-control" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
                            <option value="">Select Category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">{isEditing ? 'Update' : 'Save'}</button>
                </form>
            </div>

            <div className="table-section mt-5">
                <h3>Item List</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Item Code</th>
                            <th>Item Name</th>
                            <th>Description</th>
                            <th>QTY</th>
                            <th>Unit Price</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id} onClick={() => handleRowClick(item)}>
                                <td>{item.itemCode}</td>
                                <td>{item.itemName}</td>
                                <td>{item.description}</td>
                                <td>{item.qty}</td>
                                <td>{item.unitPrice}</td>
                                <td>{item.category.name}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Item;
