import AdminLayout from "./components/admin/AdminLayout";
import Layout from "./components/frontend/Layout";
import { Routes, Route} from "react-router-dom";
import { Cookies } from 'react-cookie';
import route from './router/route'
import admin from './router/admin'
import axios from 'axios';

function App() {
  const cookies = new Cookies();
  axios.defaults.withCredentials = true;
  axios.defaults.credentials = 'include';
  axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.get('auth')}`;
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
        {
          route && route.map((val, i)=>{
            return(
              <Route key={i} path={val.path} element={val.element} name={val.name} />
            )
          }) 
        }
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
        {
          admin && admin.map((val, i)=>{
            return(
              <Route key={i} path={val.path} element={val.element} name={val.name} />
            )
          }) 
        }
        </Route>
      </Routes>
    </div>
  );
}

export default App;
