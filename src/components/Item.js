import React, { useState } from "react";

function Item({ name, category }) {

  const [virtualCart, setVirtualCart] = useState([]);

  function isInCart() {
    return virtualCart.includes(name);
  }

  function ToggleItemInCart() {
    if (isInCart()) {
      setVirtualCart(virtualCart.filter((cartItems) => cartItems !== name));
    } else {
      setVirtualCart([...virtualCart, name]);
    }
  }

  return (
    <li className={isInCart() ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={ToggleItemInCart}>{isInCart() ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
