import { Navigate, Outlet } from 'react-router';
import Navabr from '../components/layout/Navbar/Navbar';

const ProtectedRoute = () => {
    
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Navabr />
            <Outlet />
        </div>
    );
}

export default ProtectedRoute;