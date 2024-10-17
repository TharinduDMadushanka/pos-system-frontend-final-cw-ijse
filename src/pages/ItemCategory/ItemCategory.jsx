import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form, Navbar } from 'react-bootstrap';
import './ItemCategory.css';
import { Link, useNavigate } from 'react-router-dom';

const ItemCategory = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    image: null,
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch all categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/item-categories/all');
      console.log('Fetched categories:', response.data); // Log fetched categories
      if (response.data && Array.isArray(response.data)) {
        setCategories(response.data);
      } else {
        console.error('Unexpected data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
  };

  // Handle form submission (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    if (formData.image) {
      formDataObj.append('image', formData.image);
    }

    try {
      if (editing) {
        await axios.put(`http://localhost:8080/item-categories/update/${formData.id}`, formDataObj);
      } else {
        await axios.post('http://localhost:8080/item-categories/create', formDataObj);
      }
      fetchCategories(); // Fetch categories again after adding/updating
      resetForm();
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  // Handle edit action
  const handleEdit = (category) => {
    setFormData({
      id: category.id,
      name: category.name,
      image: null, // Do not retain the image for editing
    });
    setEditing(true);
  };

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/item-categories/delete/${id}`);
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  // Reset form data
  const resetForm = () => {
    setFormData({
      id: null,
      name: '',
      image: null,
    });
    setEditing(false);
  };

  // const navigate = useNavigate();

  // const navCategory = ()=>{
  //   navigate('/dashboard')
  // }

  var index = 1;

  return (
    <div className="category">
        <Container fluid className="bg-dark text-light">
            <Row className="text-center my-4">
                <Col>
                <h2>Add Item Category</h2>
                </Col>
            </Row>
            <Row className="mb-4 form">
                <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group controlId="formImage" className="mt-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="image"
                        onChange={handleChange}
                        accept="image/*" // Restrict file types to images
                    />
                    {formData.image && <p className="mt-2">{formData.image.name}</p>} {/* Display image name */}
                    </Form.Group>

                    <Button variant="success" type="submit" className="mt-4">
                    {editing ? 'Update Category' : 'Add Category'}
                    </Button>
                </Form>
                </Col>
            </Row>
            <Row className='card-section'>
                {categories.length > 0 ? ( // Conditional rendering for categories
                categories.map((category) => (
                    <Col key={category.id} md={4} className="mb-4">
                    <Card className="bg-light text-dark card">
                        <Card.Img
                        variant="top"
                        src={`http://localhost:8080/assets/${category.image}`}
                        alt={category.name}
                        />
                        <Card.Body>
                        <Card.Title>{index++}. {category.name}</Card.Title>
                        <Button variant="primary" onClick={() => handleEdit(category)}>
                            Edit
                        </Button>{' '}
                        <Button variant="danger" onClick={() => handleDelete(category.id)}>
                            Delete
                        </Button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))
                ) : (
                <Col>
                    <p className="text-center">No categories available</p>
                </Col>
                )}
            </Row>
            </Container>

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><Link to='/' className="page-link" href="#">Home</Link></li>
                    <li className="page-item"><Link to={'/dashboard'} className="page-link" href="#">Dashboard</Link></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
    </div>
  );
};

export default ItemCategory;
