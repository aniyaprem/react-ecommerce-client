import About from "../pages/frontend/About";
import Home from "../pages/frontend/Home";
import Login from "../pages/frontend/Login";
import Signup from "../pages/frontend/Signup";

const route = [
    {path:'/', element:<Home/>, name:'Home'},
    {path:'/about', element:<About/>, name:'About'},
    {path:'/login', element:<Login/>, name:'Login'},
    {path:'/signup', element:<Signup/>, name:'Signup'},
];

export default route;