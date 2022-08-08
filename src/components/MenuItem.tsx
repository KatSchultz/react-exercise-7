import React, { useContext, useState } from "react";
import OrderContext from "../context/OrderContext";
import { Item } from "../types";
import "./MenuItem.css";

interface Props {
  item: Item;
}

export default function MenuItem({ item }: Props) {
  const [displayRemoveButton, setDisplayRemoveButton] = useState(false);
  const { addItem, orders } = useContext(OrderContext);

  function showRemoveButton() {
    setDisplayRemoveButton(true);
  }

  return (
    <li className="item-display">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Calories: {item.calories}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>{item.vegetarian ? "Vegetarian" : "Not Vegetarian"}</p>
      <button onClick={() => addItem(item)}>Add to Order</button>
      {orders.includes(item) === true && <button>Remove Item</button>}
    </li>
  );
}
