import styles from './Auth.module.css';
import { useState } from 'react';
import api from '../../app/axios'
import { Eye, EyeClosed, User, Mail } from 'lucide-react'
import toast from 'react-hot-toast';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [showPassword, setPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post('/auth/register', formData)
            console.log('Registration successful:', response.data)
            toast.success('Registration successful! Please login.')
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            setError([])
        } catch (err) {
            console.log('Registration failed:', err.response.data)
            setError(err.response.data.errors)
            toast.error(err.response.data.message || 'Registration failed. Please try again.')
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const getFieldError = (fieldName) => {
        return error.find(e => e.field === fieldName)
    }

    const nameError = getFieldError('name')
    const emailError = getFieldError('email')
    const passwordError = getFieldError('password')
    const confirmPasswordError = getFieldError('confirmPassword')
    const customError = getFieldError('custom')

    return (
        <div className={styles.container}>
            <form
                onSubmit={handleSubmit}
                className={styles['card-form']}
            >
                <h1 className={styles.title}>
                    RegisterPage
                </h1>

                <p className={styles.subtitle}>Mulai sekarang, nikmati ngopi tanpa ribet</p>

                <div className={styles.form}>
                    <label htmlFor="name" className={`${styles.label} ${nameError ? styles.labelError : ''}`}>Name</label>

                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            placeholder="Your name"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`${styles.input} ${nameError ? styles.inputError : ''}`}
                        />
                        <User size={20} className={`${styles.icon} ${nameError ? styles.iconError : ''}`} />
                    </div>

                    {nameError && (
                        <p className={styles.error}>{nameError.message}</p>
                    )}
                </div>
                <div className={styles.form}>
                    <label htmlFor="email" className={`${styles.label} ${emailError ? styles.labelError : ''}`}>Email</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            placeholder="Your email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`${styles.input} ${emailError ? styles.inputError : ''}`}
                        />
                        <Mail size={20} className={`${styles.icon} ${emailError ? styles.iconError : ''}`} />
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
                            placeholder="Your password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`${styles.input} ${passwordError ? styles.inputError : ''}`}
                        />
                        <button
                            type="button"
                            className={styles.buttonIcon}
                            onClick={() => setPassword(!showPassword)}
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
                <div className={styles.form}>
                    <label htmlFor="confirmPassword" className={`${styles.label} ${confirmPasswordError || customError ? styles.labelError : ''}`}>Confirm Password</label>
                    <div className={styles.inputWrapper}>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`${styles.input} ${confirmPasswordError || customError ? styles.inputError : ''}`}
                        />
                        <button
                            type="button"
                            className={styles.buttonIcon}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword
                                ?
                                <EyeClosed size={20} className={`${styles.icon} ${confirmPasswordError || customError ? styles.iconError : ''}`} />
                                :
                                <Eye size={20} className={`${styles.icon} ${confirmPasswordError || customError ? styles.iconError : ''}`} />}
                        </button>
                    </div>
                    {confirmPasswordError || customError ? (
                        <p className={styles.error}>{confirmPasswordError ? confirmPasswordError.message : customError.message}</p>
                    ) : null}
                </div>
                <button type="submit" className={styles['btn-submit']}>Register</button>
            </form>
        </div>
    )
}