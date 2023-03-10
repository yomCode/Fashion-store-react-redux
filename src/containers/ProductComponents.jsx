import React from "react";
import { useSelector } from "react-redux";

const ProductComponents = () => {
    const products = useSelector((state) => state);

    // const renderList = products.map((product) => {
    //     const { id, title, image, price, category } = product;
    // });

    return (
        <div className="four column wide">
            <div className="ui link cards">
                <div className="card">
                    <div className="image">

                    </div>
                    <div className="content">
                        <div className="header">

                        </div>

                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default ProductComponents;