import { ThreeCircles } from  'react-loader-spinner';
import { Table, Card, Alert } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = ()=>{
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(false);

    const allProducts = ()=>{
        axios.get(`${process.env.REACT_APP_API_URL}product-list`)
        .then((res)=>{
            if(res.data.success === true){
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
                toast(res.data.message);
                allProducts();
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        setLoader(true);
        setTimeout(function(){
            setLoader(false);
        }, 1500);
        allProducts();
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
                    <Link to="/admin/add-product" className="btn btn-success text-capitalize">add product</Link>
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
                                                    <img src={`${process.env.REACT_APP_FILE_URL}/uploads/products/${item.image}`} alt="img" style={{width:'30px', height:'30px'}} className="rounded-pill"/>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.price}</td>
                                                <td>
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