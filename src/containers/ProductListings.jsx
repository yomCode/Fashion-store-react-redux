import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponents from "./ProductComponents";


const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();
    console.log(products);

    const fetchProduct = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err);
        });
    console.log(response.data);
    dispatch(setProducts(response.data));
    }



    useEffect(() => {
      fetchProduct()
    
    }, [])
    
    console.log("product: ", products )

    return(
        <div className="ui grid container">
            <ProductComponents />
        </div>
    )
}

export default ProductListing;