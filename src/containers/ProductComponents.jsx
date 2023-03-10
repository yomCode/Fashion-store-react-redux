import React from "react";
import { useSelector } from "react-redux";

const ProductComponents = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product;
        return(
            <div key={id} className="four column wide">
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">
                                {title}
                            </div>
                            <div className="meta price">
                                $ {price}
                            </div>
                            <div className="meta">
                                {category}
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>
        )
    })
   
    console.log(products)

    return (
        <div>
            {renderList}
        </div>
            
    );
};

export default ProductComponents;