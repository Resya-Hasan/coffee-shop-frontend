import styles from "./Card.module.css"
import { Heart } from "lucide-react"

const Card = ({ title, imageUrl, sold, stock, price, button }) => {

    return (
        <div className={styles.card}>
            <div className={styles.cardImageWrapper}>
                <Heart className={styles.loveIcon} size={30} />
                <img src={imageUrl} alt={title} className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
                <h5 className={styles.cardTitle}>{title}</h5>
                <div className={styles.cardInfo}>
                    <p className={styles.sold}>{sold} sold</p>
                    <p className={styles.stock}>{stock} in stock</p>
                </div>
                <p className={styles.cardPrice}>Rp. {new Intl.NumberFormat("id-ID").format(price)}</p>
                {button}
            </div>
        </div>
    )
}

export default Card