import { Card, Row, Form, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { ThreeCircles } from  'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FiList } from "react-icons/fi";
import ReactQuill from 'react-quill';
import axios from 'axios';

const AddProduct = ()=>{
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [loader, setLoader] = useState(false);
    const [categories, setCategories] = useState('');
    const [description, setDescription] = useState('');
    const [data, setData] = useState({
        name:'',
        price:'',
        saleprice:'',
    });

    const allCategories = ()=>{
        axios.get(`${process.env.REACT_APP_API_URL}category-list`)
        .then((res)=>{
            if(res.data.success === true){
                setCategories(res.data.data);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    const uploadImage = (e)=>{
        setFile(e.target.files[0]);
    }

    const handleChange = (e)=>{
        const value = e.target.value;
        const name = e.target.name;
        setData({
            ...data,
            [name]:value
        });
    }

    const handleSubmit = (e)=>{
        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('description', description);
        formData.append('saleprice', data.saleprice);
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}create-product`, formData)
        .then((res)=>{
            if(res.data.success===true){
                navigate('/admin/products', {
                    state:{message:'Product added successfully'}
                })
            }
        }).catch((err)=>{
            if(err.response.data.success===false){
                if(err.response.data.validation!==undefined){
                    if(Object.values(err.response.data.validation).length>0){
                        let errors = err.response.data.validation;
                        toast.error(errors[0]);
                        return false;
                    }
                }

                if(err.response.data.error!==undefined){
                    toast.error(err.response.data.error);
                    return false;
                }
            }
        });
    }

    useEffect(()=>{
        setLoader(true);
        setTimeout(function(){
            setLoader(false);
        }, 1500);
        allCategories();
    },[])

    return (
        <>
            {
                loader && <ThreeCircles
                    height="100"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass="ajax-loader"
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor="yellow"
                    innerCircleColor="yellow"
                    middleCircleColor="yellow"
                />
            }
            <Card className="border-0 shadow-lg">
                <Card.Header className="border-top-0 p-3 d-flex align-items-center justify-content-between">
                    <Card.Title className="m-0">Add Product</Card.Title>
                    <Link to="/admin/products" className="btn btn-success text-capitalize"><FiList/> products</Link>
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
                                    <Form.Control type="file" placeholder="Enter product name" name="image" onChange={(e)=>{uploadImage(e);}}/>
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
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-capitalize">Select Category</Form.Label>
                                    <Form.Select name="category">
                                        {
                                            categories.length > 0 ? 
                                            <option>Select category</option>:
                                            <option>No Category found!</option>
                                        }
                                        {
                                            categories && categories.map((item, index)=>{
                                                return(
                                                    <option key={index} value={item._id}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
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
        </>    
    )
}

export default AddProduct;