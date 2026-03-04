import Button from '../../ui/Button/Button';
import styles from './Navbar.module.css';
import { User } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className={styles.navabrContainer}>
            <a href="/" className={styles['navbar-logo']}>Coffee Shop</a>
            <ul className={styles['navbar-menu']}>
                <li><a href="/dashboard">Category</a></li>
                <li><a href="/register">Cart</a></li>
                <li><a href="/login">Likes</a></li>
            </ul>
            <input type="text" placeholder="Search..." className={styles['navbar-search']} />
            <div className={styles['container-btn']}>
                <Button
                    desaign={"border-only"}
                    color="btn-primary"
                    size={"medium"}
                    onClick={() => alert('Login clicked!')}
                >
                    Login
                </Button>
                <Button
                    size={"medium"}
                    onClick={() => alert('Register clicked!')}
                >
                    Register
                </Button>
            </div>
        </nav>
    )
}

export default Navbar;