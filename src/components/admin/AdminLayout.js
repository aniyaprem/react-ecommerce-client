import Header from './Header';
import { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminLayout = ()=>{
    const navigate = useNavigate()
    const cookies = new Cookies();
    const cookie = cookies.get('auth');

    useEffect(()=>{
        if(!cookie){
            navigate('/login');
        }
    },[cookie, navigate]);

    return(
        <>
            {
                cookie ? 
                <div className="page-wrapper">
                    <Sidebar/>
                    <main>
                        <Header/>
                        <div className="page-content">
                            <Outlet/>
                        </div>
                    </main>
                </div> : ''
            }
        </>
    )
}

export default AdminLayout;