import CategoryList from "../pages/admin/category/CategoryList";
import EditCategory from "../pages/admin/category/EditCategory";
import AddCategory from "../pages/admin/category/AddCategory";
import AddProduct from "../pages/admin/product/AddProduct";
import Products from "../pages/admin/product/Products";

const admin = [
    {path:'/admin/products', element:<Products/>, name:'Products'},
    {path:'/admin/add-product', element:<AddProduct/>, name:'AddProduct'},
    {path:'/admin/add-category', element:<AddCategory/>, name:'AddCategory'},
    {path:'/admin/category-list', element:<CategoryList/>, name:'CategoryList'},
    {path:'/admin/edit-category/:id', element:<EditCategory/>, name:'EditCategory'},
];

export default admin;