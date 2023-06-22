import { FiPlusCircle, FiEdit2, FiTrash2 } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation } from "react-router-dom";
import { Card, Table, Alert } from "react-bootstrap";
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const CategoryList = ()=>{
    const [categories, setCategories] = useState([]);
    const location = useLocation();

    const allCategory = ()=>{
        axios.get(`${process.env.REACT_APP_API_URL}category-list`)
        .then((res)=>{
            if(res.data.success === true){
                setCategories(res.data.data);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    const deleteCategory = (id)=>{
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to leave this page?",
            icon: "warning",
            dangerMode: true,
        }).then(willDelete => {
            if (willDelete) {
                axios.delete(`${process.env.REACT_APP_API_URL}category-delete/${id}`)
                .then((res)=>{
                    console.log(res);
                    if(res.data.success === true){
                        allCategory();
                        toast.success(res.data.message);
                    }else{
                        toast.error(res.data.message);
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            }
        });
        
    }

    useEffect(()=>{
        if(location.state !== null){
            toast.success(location.state.message);
            location.state = null;
        }
        allCategory();
    },[])

    return (
        <Card className="border-0 shadow-lg">
            <Card.Header className="border-top-0 p-3 d-flex align-items-center justify-content-between">
                <Card.Title className="m-0">Category List</Card.Title>
                <Link to="/admin/add-category" className="btn btn-success text-capitalize"><FiPlusCircle/> Category</Link>
            </Card.Header>
            <Card.Body>
                {
                    categories.length>0 ? 
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories && categories.map((val, index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>
                                                    <img src={`${process.env.REACT_APP_FILE_URL}/uploads/${val.photo}`} alt="img" style={{width:'30px', height:'30px'}} className="rounded-pill"/>
                                                </td>
                                                <td className="text-capitalize">{val.name}</td>
                                                <td className="text-capitalize">
                                                    <Link to={`/admin/edit-category/${val._id}`} className="btn btn-info bt-md text-white"><FiEdit2/></Link>
                                                    <button type="button" className="btn-danger btn ms-2" onClick={()=>{deleteCategory(val._id)}}><FiTrash2/></button>  
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    :<Alert variant='danger'>No category found!</Alert>
                }
            </Card.Body>
            <ToastContainer autoClose={10000} theme="dark" closeOnClick newestOnTop={true}/>
        </Card>
        )
}

export default CategoryList;