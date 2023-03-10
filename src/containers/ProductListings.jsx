import React from "react";
import { useSelector } from "react-redux";
import ProductComponents from "./ProductComponents";


const ProductListing = () => {
    const products = useSelector((state) => state)
    console.log(products);
    return(
        <div className="ui grid container">
            <ProductComponents />
        </div>
    )
}

export default ProductListing;