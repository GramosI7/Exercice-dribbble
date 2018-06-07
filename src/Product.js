import React from "react";

const Product = (props) => {
    return (
        <div className="produit">
        <img  width="160px" height="160px;" src={props.photo} alt=""/>
        </div>
    )
}

export default Product;