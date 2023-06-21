import CategoryList from "../pages/admin/category/CategoryList";
import AddCategory from "../pages/admin/category/AddCategory";
import AddProduct from "../pages/admin/AddProduct";
import Products from "../pages/admin/Products";

const admin = [
    {path:'/admin/products', element:<Products/>, name:'Products'},
    {path:'/admin/add-product', element:<AddProduct/>, name:'AddProduct'},
    {path:'/admin/add-category', element:<AddCategory/>, name:'AddCategory'},
    {path:'/admin/category-list', element:<CategoryList/>, name:'CategoryList'},
];

export default admin;