import { Routes, Route } from 'react-router';
import RegisterPage from '../features/auth/RegisterPage';
import LoginPage from '../features/auth/LoginPage';
import Dashboard from '../features/dashboard/dashboard';
import ProtectedRoute from '../layouts/protectedRoute';
import PublicRoute from '../layouts/publicRoute';

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path='/dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
    )
}