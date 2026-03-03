import styles from './Auth.module.css';
import { User, Eye, EyeClosed } from 'lucide-react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../app/axios'
import { Link } from 'react-router';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await api.post('/auth/login', formData)
            toast.success('Login successful!')
            setFormData({
                email: '',
                password: ''
            })
            setError([])
            localStorage.setItem('token', data.data.token)
        } catch (err) {
            setError(err.response.data.errors)
            toast.error('Login failed. Please try again.')
        }
    }

    const getFieldError = (fieldName) => {
        return error.find(e => e.field === fieldName)
    }

    const emailError = getFieldError('email')
    const passwordError = getFieldError('password')

    return (
        <div className={styles.container}>
            <form
                className={styles["card-form"]}
                onSubmit={handleSubmit}
            >
                <h1 className={styles.title}>Login Page</h1>
                <p className={styles.subtitle}>Welcome back! Please login to your account.</p>
                <div className={styles.form}>
                    <label htmlFor="email" className={`${styles.label} ${emailError ? styles.labelError : ''}`}>Email</label>

                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            name='email'
                            id="email"
                            className={`${styles.input} ${emailError ? styles.inputError : ''}`}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <User size={20} className={`${styles.icon} ${emailError ? styles.iconError : ''}`} />
                    </div>

                    {emailError && (
                        <p className={styles.error}>{emailError.message}</p>
                    )}
                </div>
                <div className={styles.form}>
                    <label htmlFor="password" className={`${styles.label} ${passwordError ? styles.labelError : ''}`}>Password</label>

                    <div className={styles.inputWrapper}>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className={`${styles.input} ${passwordError ? styles.inputError : ''}`}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className={styles.buttonIcon}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword
                                ?
                                <EyeClosed size={20} className={`${styles.icon} ${passwordError ? styles.iconError : ''}`} />
                                :
                                <Eye size={20} className={`${styles.icon} ${passwordError ? styles.iconError : ''}`} />}
                        </button>
                    </div>
                    {passwordError && (
                        <p className={styles.error}>{passwordError.message}</p>
                    )}
                </div>
                <button type="submit" className={styles["btn-submit"]}>Login</button>

                <div className={styles.footer}>
                    <p className={styles.text}>Don't have an account? <Link to="/register" className={styles.link}>Register here</Link></p>
                </div>
            </form>
        </div>
    )
}