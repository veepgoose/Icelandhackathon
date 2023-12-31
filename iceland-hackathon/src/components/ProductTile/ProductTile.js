import React from 'react';
import './ProductTile.css';
import ProductArray from '../../products';


const ProductTile = ({setScoretotals,scoretotals}) => {
    const products = ProductArray.map((product, i) => {
        return (
            <div className="ProductTile" key={i}>
            <h1 className="TileHeader">{product.name}</h1>
            <img className="TileImage" src= {product.image} alt="Fruit & Veg"/>
            <h3 className="BBE">BBE: {product.shelfLife}</h3>
            <h3 className="Discount">Discount: {product.discount}</h3>
            <h3 className="Price">Price:{product.price}</h3>
            <h3 className="EcoPoints">Gain Eco Points:{product.points}</h3>
            <button className="AddToBasket" onClick={()=>setScoretotals(scoretotals+product.points)}>Add to Basket</button>
        </div>

        )
    })
 
    return (   
        <div className="ProductArray"> 
        {products}
        </div>
    )};

    
    
export default ProductTile;