import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Outlet } from "react-router";
import Sidebar from "../components/layout/sidebar/Sidebar";
import styles from "./layout.module.css";

const AdminRoute = () => {
    const navigate = useNavigate();
    const { isAdmin, loading } = useSelector((state) => state.auth);
    const token = localStorage.getItem("token");



    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }

        if (loading) return;

        if (!isAdmin) {
            toast.error("You are not authorized to access this page");
            navigate("/");
        }
    }, [isAdmin, loading, navigate]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className={styles.containerAdminRoute}>
            <Sidebar />
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminRoute;