import React from "react";
import Product from "./Product";
import photo from "./Tableau";

const boucle = photo.map(photos => {
    return(
        <Product key={photos.img} photo={photos.img}/>
    )    
})
class Products extends React.Component {
    
    render() {
        return (
            <div className="flex container-fluid">
            {boucle}
            <div className="container btnb">
            <button type="button" class="btn btn-primary btn-lg">Sign up to continue</button>
            
            </div>

            </div>
        )
    }
    
}

export default Products;