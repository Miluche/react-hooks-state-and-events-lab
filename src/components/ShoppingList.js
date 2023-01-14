import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState(items);

  function filterCategory(newFilterCategory) {
    return items.filter((item) => item.category === newFilterCategory);
  }

  function selectCategory(evt) {
    const currentSelectedCategory = evt.target.value;

    if (currentSelectedCategory === "All") {
      setSelectedCategory([...items]);
      return;
    } else {
      setSelectedCategory(filterCategory(currentSelectedCategory));
      return;
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selectCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
