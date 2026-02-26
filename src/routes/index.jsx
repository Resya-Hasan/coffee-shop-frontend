import { Routes, Route } from 'react-router';
import RegisterPage from '../features/auth/RegisterPage';
import LoginPage from '../features/auth/LoginPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    )
}