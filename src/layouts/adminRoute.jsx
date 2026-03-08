import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Outlet } from "react-router";

const AdminRoute = () => {
    const navigate = useNavigate();
    const { isAdmin, loading } = useSelector((state) => state.auth);


    useEffect(() => {
        if (loading) return; // Wait for loading to finish before checking admin status

        if (!isAdmin) {
            toast.error("You are not authorized to access this page");
            navigate("/");
        }
    }, [isAdmin, loading, navigate]);

    if (loading) return <div>Loading...</div>; // Show a loading state while checking admin status

    return (
        <Outlet />
    )
}

export default AdminRoute;