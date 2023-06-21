import { Row, Container, Col, Card, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Cookies } from 'react-cookie';
import axios from 'axios';

const Login = ()=>{
    const cookie = new Cookies();
    const navigate = useNavigate();
    // const [cookies, setCookie] = useCookies(['reactauth']);
    const [data, setData] = useState({
        email:'',
        password:''
    });

    const handleChange = (e)=>{
        let value = e.target.value;
        let name = e.target.name;
        setData({
            ...data,
            [name]:value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}login`,data,{
            withCredentials: true,
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json',
            },
        }).then((res)=>{
            if(res.data.success === true){
                toast.error(res.data.message);
                navigate('/admin');
            }
        }).catch((err)=>{
            if(err.response.data.success===false){
                if(err.response.data.error!==undefined){
                    toast.error(err.response.data.error);
                }
            }
        })
    }

    useEffect(()=>{
        const checkAuth = ()=>{
            cookie.get('auth') ? navigate('/admin') : navigate('/login');
        }
        checkAuth();
    },[navigate])

    return(
        <Container>
            <Row>
            <ToastContainer autoClose={10000} theme="dark" closeOnClick newestOnTop={true}/>
                <Col xxl={5} xl={5} lg={5} md={5} sm={6} xs={11} className="m-auto py-4">
                    <Card className="shadow border-0">
                        <Card.Body className="p-4">
                            <Card.Title className="mb-3 text-capitalize">login here</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='text' name="email" placeholder="Ener Email" value={data.email} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' name="password" placeholder="Ener Password" value={data.password} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Button type="submit" className="btn btn-success rounded-0 text-uppercase">login</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;