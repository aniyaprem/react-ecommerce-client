import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row, Container, Col, Card, Form, Button } from "react-bootstrap";


const Signup = ()=>{
    const [countries, setCountries] = useState();
    const [states, setStates] = useState();
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
            }else{
                setStates();
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getContries()
    },[])

    return(
        <Container>
            <Row>
                <Col xxl={7} xl={7} lg={7} md={9} sm={10} xs={11} className="m-auto py-4">
                    <Card className="shadow border-0">
                        <Card.Body className="p-4">
                            <Card.Title className="mb-3 text-capitalize">register here</Card.Title>
                            <Form method="post">
                                <Row>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type='text' name="name" placeholder="Ener Name" onChange={handleChange} value={data.name}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type='email' name="email" placeholder="Ener Email" onChange={handleChange} value={data.email}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type='number' name="phone" placeholder="Ener Phone" onChange={handleChange}/>
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
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select name="state" onChange={(e)=>{handleChange(e);}}>
                                            {
                                                states?.length ? states.map((item, index)=>{
                                                    return (
                                                        <option key={index} value={item.id}>{item.name}</option>
                                                    )
                                                }):<option disabled >No states found!</option>
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>City</Form.Label>
                                        <Form.Select name="city">
                                            <option value="">Select City</option>
                                            <option value="">Delhi</option>
                                            <option value="">Mumbai</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type='password' name="password" placeholder="Ener Password" onChange={handleChange} value={data.password}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-xxl-6 col-xl-6 col-md-6 col-lg-6 col-sm-12">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type='password' name="confirm_password" placeholder="Ener Confirm Password" onChange={handleChange} value={data.confirm_password}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button className="btn btn-success rounded-0 text-uppercase">login</Button>
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