import styles from "./Button.module.css";
import React from "react";

const Button = ({
    children, onClick, size = "medium", color = "btn-primary", disabled = false, icon, type = "button", desaign
}) => {

    const iconSizeMap = {
        small: 12,
        medium: 18,
        large: 20,
    }

    return (
        <button
            onClick={onClick}
            className={`${styles.btn} ${styles[desaign]} ${styles[color]} ${styles[size]}`}
            disabled={disabled}
            type={type}
        >
            { icon &&
                React.cloneElement(icon, { size: iconSizeMap[size] })
            }
            {children}
        </button>
    );
};

export default Button;