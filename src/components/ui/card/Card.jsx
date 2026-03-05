import styles from "./Card.module.css"
import { useEffect } from "react"

const Card = ({ title, imageUrl, sold, price, button }) => {

    return (
        <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
                <img src={imageUrl} alt={title} className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
                <h5 className={styles.cardTitle}>{title}</h5>
                <div className={styles.cardPrice}>
                    <p>Rp. {new Intl.NumberFormat("id-ID").format(price)}</p>
                </div>
                <p className={styles.cardSold}>{sold} sold</p>
                {button}
            </div>
        </div>
    )
}

export default Card