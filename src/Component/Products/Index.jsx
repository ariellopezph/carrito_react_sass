import React from "react";
import { ProductsData } from "../../Data/ProductData";


const Products = () => {
    return (
        <div>
            {ProductsData.map((product, i) => (
                <div key={i}>
                    <img src={product.img} alt={product.name} />
                    <div>
                        <p>
                            {product.name} - ${product.price}
                        </p>
                    </div>
                    <button onClick={() => console.log(product)}>Add to cart</button>
                </div>

            ))}
        </div>
    )
}

export default Products