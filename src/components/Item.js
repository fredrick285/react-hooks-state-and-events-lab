import React, { useState } from "react";

function Item({ name, category }) {
  const[inCart, setIsInCart] = useState(false)

function handleAddToCart () { 
  setIsInCart((inCart)=> !inCart)}

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleAddToCart}>        {inCart ? "Remove From" : "Add to"} Cart
 Cart</button>
    </li>
  );
}

export default Item;