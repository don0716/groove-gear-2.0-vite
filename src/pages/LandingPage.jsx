import axios from "axios"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const LandingPage = () => {
    const [products, setProducts] = useState([])
    const API_URL = import.meta.env.VITE_BACKEND_URL

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try{
            const res = await axios.get(`${API_URL}/api/products`)
            console.log(res.data)
            setProducts(res.data)
        }catch(error){
            console.log(error)
        }
    }


    return (
        <>
          <div>
            LandingPage Page
          </div>
        </>
    )
}

export default LandingPage