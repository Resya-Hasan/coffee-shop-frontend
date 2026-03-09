import styles from "./Sidebar.module.css";
import { Link } from "react-router";
import Button from "../../ui/Button/Button"
import { LogOut, CirclePlus } from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/AuthSlice";

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(logout());
        navigate("/login");
    }

    return (
        <div className={styles.sidebar}>
            <header className={styles.sidebarHeader}>
                <h2>Admin Panel</h2>
            </header>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to="/admin/dashboard">Dashboard</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to="/admin/orders">Orders</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to="/admin/products">Products</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to="/admin/customers">Customers</Link></li>
                <li className={styles.sidebarItem}><Link className={styles.sidebarLink} to="/admin/transactions">Transactions</Link></li>
            </ul>

            <ul className={styles.actions}>
                <li className={styles.sidebarItem}>
                    <CirclePlus size={23}/>
                    <Link className={styles.sidebarLink} to="/admin/add-product">
                        Add Product
                    </Link></li>
            </ul>

            <div className={styles.sidebarFooter}>
                <Button size={"large"} onClick={handleLogout} variant={"no-bg"} color={"btn-danger-no-bg"} icon={<LogOut />}>Logout</Button>
            </div>
        </div>
    )
}

export default Sidebar;