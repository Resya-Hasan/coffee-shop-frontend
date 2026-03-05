import Navbar from "../../components/layout/Navbar/Navbar"
import styles from "./Home.module.css"
import Card from "../../components/ui/card/Card"
import Button from "../../components/ui/Button/Button"
import { ShoppingCart } from "lucide-react"

const HomePage = () => {
    const data = {
        title: "Ethiopia Guji Hambella Wamena Funky Natural 200g Kopi Arabica",
        imageUrl: "https://d8g5mz6srwlcs.cloudfront.net/thumbnail/6977474cb1faf944156839.png",
        price: 175500,
        sold: 21
    }


    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>

            <h2>Popular Coffee</h2>
            <div className={styles.productList}>
                <Card
                    title={data.title}
                    imageUrl={data.imageUrl}
                    price={data.price}
                    sold={data.sold}
                    button={
                        <Button
                            onClick={() => alert("Buy Now clicked")}
                            icon={<ShoppingCart />}
                            size="medium"
                        >
                            Add to Cart
                        </Button>
                    }
                />
            </div>
        </div>
    )
}

export default HomePage