import Button from '../../ui/Button/Button';
import styles from './Navbar.module.css';
import Input from '../../ui/input/Input';
import { Search, List } from 'lucide-react'
import { Link, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const isLogin = !!localStorage.getItem('token');
    const navigate = useNavigate();

    const handleMovePage = (path) => {
        navigate(path);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }

    return (
        <nav className={styles.navbarContainer}>
            <Link to="/" className={styles['navbar-logo']}>
                <h1>MyShop</h1>
            </Link>

            <div className={styles.action}>
                <Input
                    type="text"
                    placeholder="Search..."
                    icon={<Search />}
                    size={"medium"}
                />

                <div className={styles.humburger}>
                    <Button variant={"no-bg"} onClick={() => setOpen(!open)}>
                        <List size={28} />
                    </Button>
                </div>

                <div className={`${styles['navbar-subContainer']} ${open ? styles.show : ""}`}>
                    {isLogin && (
                        <ul className={`${styles['navbar-menu']}`}>
                            <li><Link to="/category" className={styles.link}>Category</Link></li>
                            <li><Link to="/cart" className={styles.link}>Cart</Link></li>
                            <li><Link to="/likes" className={styles.link}>Likes</Link></li>
                        </ul>
                    )}


                    {isLogin ? (
                        <Button
                            variant={"deafault"}
                            color="btn-primary"
                            size={"medium"}
                            onClick={() => handleLogout()}
                        >
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button
                                variant={"border-only"}
                                color="btn-primary"
                                size={"medium"}
                                onClick={() => handleMovePage('/login')}
                            >
                                Login
                            </Button>
                            <Button
                                size={"medium"}
                                onClick={() => handleMovePage('/register')}
                            >
                                Register
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;