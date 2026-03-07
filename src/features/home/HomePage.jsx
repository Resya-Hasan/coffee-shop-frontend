import Navbar from "../../components/layout/Navbar/Navbar"
import styles from "./Home.module.css"
import Card from "../../components/ui/card/Card"
import { useEffect, useState } from "react"
import api from "../../app/axios"
import toast from "react-hot-toast"

const HomePage = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const { data } = await api.get("/coffees")
            setData(data.data)
        } catch (err) {
            toast.error("Failed to fetch data")
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Navbar />
            <div className={styles.containerProduct}>

                <h2>Popular Coffee</h2>

                <div className={styles.productList}>
                    {
                        data.map((el) => {
                            return (
                                <Card
                                    key={el.id}
                                    title={el.name}
                                    imageUrl={el.CoffeeImages[0].imgUrl}
                                    price={el.price}
                                    sold={el.sold}
                                    stock={el.stock}
                                />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default HomePage