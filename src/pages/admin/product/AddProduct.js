import { Card, Row, Form, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import { useState } from 'react';
import axios from 'axios';

const AddProduct = ()=>{
    const formData = new FormData();
    const [description, setDescription] = useState('');
    formData.append("image", '');
    const [data, setData] = useState({
        name:'',
        price:'',
        saleprice:''
    });

    const handleChange = (e)=>{
        const value = e.target.value;
        const name = e.target.name;
        setData({
            ...data,
            [name]:value
        });
    }

    const uploadImage = (e)=>{
        for (let i = 0; i < e.target.files.length; i++) {
            formData.append("image", e.target.files[i]);
        }
    }

    const handleSubmit = (e)=>{
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('saleprice', data.saleprice);
        formData.append('description', description);
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}create-product`, formData)
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
            if(err.response.data.success===false){
                if(err.response.data.validation!==undefined){
                    if(Object.values(err.response.data.validation).length>0){
                        let errors = err.response.data.validation;
                        // setError(errors);
                        toast.error(errors[0]);
                    }
                }

                if(err.response.data.error!==undefined){
                    toast.error(err.response.data.error);
                }
            }
        });
    }

    return (
        <Card className="border-0 shadow-lg">
            <Card.Header className="border-top-0 p-3 d-flex align-items-center justify-content-between">
                <Card.Title className="m-0">Add Product</Card.Title>
                <Link to="/admin/add-product" className="btn btn-success text-capitalize">product list</Link>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Row>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-capitalize">product name</Form.Label>
                                <Form.Control type="text" placeholder="Enter product name" name="name" onChange={(e)=>{handleChange(e);}}/>
                            </Form.Group>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-capitalize">product images</Form.Label>
                                <Form.Control type="file" placeholder="Enter product name" name="image" multiple onChange={(e)=>{uploadImage(e);}}/>
                            </Form.Group>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-capitalize">product price</Form.Label>
                                <Form.Control type="number" placeholder="Enter product price" name="price" onChange={(e) => {handleChange(e);}}/>
                            </Form.Group>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-capitalize">product sale price</Form.Label>
                                <Form.Control type="number" placeholder="Enter product sale price" name="saleprice" onChange={(e)=>{handleChange(e);}}/>
                            </Form.Group>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-capitalize">product description</Form.Label>
                                <ReactQuill theme="snow" value={description} onChange={setDescription} name="descrition"/>
                            </Form.Group>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Form.Group>
                                <Button type="submit" className="btn btn-success rounded-0 text-uppercase">login</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
            <ToastContainer autoClose={10000} theme="dark" closeOnClick newestOnTop={true}/>
        </Card>    
    )
}

export default AddProduct;