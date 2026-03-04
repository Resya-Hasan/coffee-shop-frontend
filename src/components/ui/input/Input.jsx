import styles from './Input.module.css';
import React from 'react';

const Input = ({
    label,
    type = 'text',
    placeholder = '',
    value,
    onChange,
    error,
    icon,
    size = 'medium',
    disabled = false,
    name,
}) => {

    const iconSizeMap = {
        small: 14,
        medium: 18,
        large: 20,
    }

    return (
        <div className={styles.wrapper}>
            {label && <label htmlFor={name} className={styles.label}>{label}</label>}

            <div className={`
                    ${styles.inputContainer} 
                    ${styles[size]}
                    ${error ? styles.error : ''}
                    ${disabled ? styles.disabled : ''}
                `}
            >

                {icon && 
                    React.cloneElement(icon, {
                        size: iconSizeMap[size],
                        className: styles.icon,
                    })
                }

                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    name={name}
                    className={`${styles.input}`}
                />

            </div>
                {error && <p className={styles.errorText}>{error}</p>}
        </div>
    );
}

export default Input;