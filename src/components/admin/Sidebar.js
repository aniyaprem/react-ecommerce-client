import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = ()=>{
    const menus = [
        {name:'dashboard', path:'/admin'},
        {name:'products', path:'/admin/products'},
        {name:'category', path:'/admin/category-list'},
    ];
    return(
        <div className="sidebar bg-dark">
            <Nav.Item className="admin-logo d-flex align-items-center">
                <Link to="/" className="nav-link flex-grow-1 text-center text-white">E-Commerce</Link>
            </Nav.Item>
            <Nav className="flex-column side-menu">
                {
                    menus && menus.map((val, index)=>{
                        return(
                            <Nav.Item key={index} className="">
                                <Link to={val.path} className="nav-link">{val.name}</Link>
                            </Nav.Item>
                        )
                    })
                }
            </Nav>
        </div>
    )
}

export default Sidebar;