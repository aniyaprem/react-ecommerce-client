import { Card, Row, Form, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FiList } from "react-icons/fi";
import axios from 'axios';

const AddCategory = ()=>{
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState({
        name:'',
        parentId:""
    });

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

    const allCategory = ()=>{
        axios.get(`${process.env.REACT_APP_API_URL}category-list`)
        .then((res)=>{
            if(res.data.success === true){
                setCategories(res.data.data);
            }
        }).catch((err)=>{

        })
    }

    const handleSubmit = (e)=>{
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('parentId', data.parentId);
        formData.append('image', file);
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}create-category`, formData)
        .then((res)=>{
            console.log(res);
            if(res.data.success===true){
                setFile();
                setData({name:'', parentId:''});
                toast.success(res.data.message);
                navigate('/admin/category-list', {
                    state:{message:'Category added successfully'}
                });
            }
        }).catch((err)=>{
            if(err.response.data.success === false){
                if(err.response.data.validation !== undefined){
                    toast.error(err.response.data.validation[0]);
                }
            }
        })
    }

    useEffect(()=>{
        allCategory();
    },[])

    return (
        <Card className="border-0 shadow-lg">
            <Card.Header className="border-top-0 p-3 d-flex align-items-center justify-content-between">
                <Card.Title className="m-0">Add Category</Card.Title>
                <Link to="/admin/category-list" className="btn btn-success text-capitalize"><FiList/> category list</Link>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Row>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-capitalize">category name</Form.Label>
                                <Form.Control type="text" placeholder="Enter category name" name="name" onChange={(e)=>{handleChange(e);}}/>
                            </Form.Group>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-capitalize">category image</Form.Label>
                                <Form.Control type="file" placeholder="Enter product name" name="image" onChange={(e)=>{uploadImage(e);}}/>
                            </Form.Group>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-capitalize">parent category</Form.Label>
                                <Form.Select name="parentId" className="form-select"  onChange={(e)=>{handleChange(e);}}>
                                    {
                                        categories?.length ? 
                                        <option value="">Select Parent Category</option>
                                        :<option value="">Not category found</option>
                                    }
                                    {
                                        categories.length ? categories.map((item, index)=>{
                                            return(
                                                <option className="text-capitalize" key={index} value={item._id}>{item.name}</option>
                                            )
                                        }):<option value="">Not category found</option>
                                    }
                                </Form.Select>
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

export default AddCategory;