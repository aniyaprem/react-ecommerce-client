import { FiTrash2, FiPlusCircle, FiEdit2, } from "react-icons/fi";
import { getCurrentUser } from '../../../slices/UserSlice'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation } from "react-router-dom";
import { ThreeCircles } from  'react-loader-spinner';
import { Table, Card, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";

const Products = ()=>{
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);

    const allProducts = ()=>{
        axios.get(`${process.env.REACT_APP_API_URL}product-list`)
        .then((res)=>{
            if(res.data.success === true){
                dispatch(getCurrentUser(res.data.user));
                setProducts(res.data.data);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    const deleteProduct = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}product-delete/${id}`)
        .then((res)=>{
            if(res.data.success === true){
                allProducts();
                toast(res.data.message);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        allProducts();
        if(location.state !== null){
            toast.success(location.state.message);
        }
        location.state = null;
        setLoader(true);
        setTimeout(function(){
            setLoader(false);
        }, 1500);
        console.log(state);
    },[]);

    return(
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
                    <Card.Title className="m-0">Products List</Card.Title>
                    <Link to="/admin/add-product" className="btn btn-success text-capitalize"><FiPlusCircle/> product</Link>
                </Card.Header>
                <Card.Body>
                    {
                        products.length>0 ?
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products && products.map((item, index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>
                                                    <img src={`${process.env.REACT_APP_FILE_URL}/${item.image}`} alt="img" style={{width:'30px', height:'30px'}} className="rounded-pill"/>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>$ {item.price}</td>
                                                <td>
                                                    <Link to="/" className="btn btn-info bt-md text-white"><FiEdit2/></Link>
                                                    <button type="button" className="btn-danger btn ms-2" onClick={()=>{deleteProduct(item._id)}}><FiTrash2/></button>    
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>:<Alert variant='danger'>No product found!</Alert>
                    }
                </Card.Body>
                <ToastContainer autoClose={10000} theme="dark" closeOnClick newestOnTop={true}/>
            </Card>
        </>
        
    )
}

export default Products;