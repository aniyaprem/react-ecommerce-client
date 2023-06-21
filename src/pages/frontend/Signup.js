import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Row, Container, Col, Card, Form, Button } from "react-bootstrap";

const Signup = ()=>{
    const [error, setError] = useState({
        name:'',
        email:'',
        phone:'',
        country:'',
        state:'',
        city:'',
        password:'',
    });
    const [countries, setCountries] = useState();
    const [states, setStates] = useState();
    const [cities, setCities] = useState();
    const [data, setData] = useState({
        name:'',
        email:'',
        phone:'',
        country:'',
        state:'',
        city:'',
        password:'',
        confirm_password:''
    });

    const handleChange = (e)=>{
        let value = e.target.value;
        let name = e.target.name;
        setError({
            ...error,
            [name]:''
        });
        setData({
            ...data,
            [name]:value
        });
    }

    const getContries = ()=>{
        axios.get(`${process.env.REACT_APP_API_URL}countries`)
        .then((res)=>{
            if(res.data.success===true){
                setCountries(res.data.data);
                setStates();
                setCities();
            }else{
                setCountries();
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    const getState = (e)=>{
        axios.get(`${process.env.REACT_APP_API_URL}states/${e.target.value}`)
        .then((res)=>{
            if(res.data.success===true){
                setStates(res.data.data);
                setCities();
            }else{
                setStates();
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    const getCity = (e)=>{
        axios.get(`${process.env.REACT_APP_API_URL}cities/${e.target.value}`)
        .then((res)=>{
            if(res.data.success===true){
                setCities(res.data.data);
            }else{
                setCities();
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getContries()
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}register`, data)
        .then((res)=>{
            console.log(res);
            if(res.data.success===true){
                toast.success(res.data.message);
            }else{
                toast.error(res.data.error);
            }
        }).catch((err)=>{
            if(err.response.data.success===false){
                if(err.response.data.validation!==undefined){
                    if(Object.values(err.response.data.validation).length>0){
                        let errors = err.response.data.validation;
                        setError(errors);
                    }
                }

                if(err.response.data.error!==undefined){
                    toast.error(err.response.data.error);
                }
            }
        })
    }

    return(
        <Container>
            <Row>
            <ToastContainer autoClose={10000} theme="dark" closeOnClick newestOnTop={true}/>
                <Col xxl={7} xl={7} lg={7} md={9} sm={10} xs={11} className="m-auto py-4">
                    <Card className="shadow border-0">
                        <Card.Body className="p-4">
                            <Card.Title className="mb-3 text-capitalize">register here</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type='text' name="name" placeholder="Ener Name" onChange={handleChange} value={data?.name}/>
                                        {
                                            error.name && 
                                            <Form.Text className='mt-2 mb-0 text-danger'>{error.name}</Form.Text> 
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type='email' name="email" placeholder="Ener Email" onChange={handleChange} value={data.email}/>
                                        {
                                            error.email && 
                                            <Form.Text className='mt-2 mb-0 text-danger'>{error.email}</Form.Text> 
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type='number' name="phone" placeholder="Ener Phone" onChange={handleChange}/>
                                        {
                                            error.phone && 
                                            <Form.Text className='mt-2 mb-0 text-danger'>{error.phone}</Form.Text> 
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select name="country" onChange={(e)=>{handleChange(e); getState(e);}}>
                                            {
                                                countries?.length ? countries.map((item, index)=>{
                                                    return (
                                                        <option key={index} value={item.id}>{item.name}</option>
                                                    )
                                                }):<option disabled >No countries found!</option>
                                            }
                                        </Form.Select>
                                        {
                                            error.country && 
                                            <Form.Text className='mt-2 mb-0 text-danger'>{error.country}</Form.Text> 
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select name="state" onChange={(e)=>{handleChange(e); getCity(e);}}>
                                            {
                                                states?.length ? states.map((item, index)=>{
                                                    return (
                                                        <option key={index} value={item.id}>{item.name}</option>
                                                    )
                                                }):<option disabled >No states found!</option>
                                            }
                                        </Form.Select>
                                        {
                                            error.state && 
                                            <Form.Text className='mt-2 mb-0 text-danger'>{error.state}</Form.Text> 
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>City</Form.Label>
                                        <Form.Select name="city" onChange={(e)=>{handleChange(e);}}>
                                        {
                                                cities?.length ? cities.map((item, index)=>{
                                                    return (
                                                        <option key={index} value={item.id}>{item.name}</option>
                                                    )
                                                }):<option disabled >No cities found!</option>
                                            }
                                        </Form.Select>
                                        {
                                            error.city && 
                                            <Form.Text className='mt-2 mb-0 text-danger'>{error.city}</Form.Text> 
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type='password' name="password" placeholder="Ener Password" onChange={handleChange} value={data.password}/>
                                        {
                                            error.password && 
                                            <Form.Text className='mt-2 mb-0 text-danger'>{error.password}</Form.Text> 
                                        }
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type='password' name="confirm_password" placeholder="Ener Confirm Password" onChange={handleChange} value={data.confirm_password}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button type="submit" className="btn btn-success rounded-0 text-uppercase">login</Button>
                                    </Form.Group>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;