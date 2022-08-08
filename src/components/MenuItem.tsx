import React, { useContext } from "react";
import OrderContext from "../context/OrderContext";
import { Item } from "../types";
import "./MenuItem.css";

interface Props {
  item: Item;
}

export default function MenuItem({ item }: Props) {
  const { addItem, orders } = useContext(OrderContext);
  return (
    <div className="item-display">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Calories: {item.calories}</p>
      <p>Price: ${item.price}</p>
      <p>{item.vegetarian ? "Vegetarian" : "Not Vegetarian"}</p>
      <button onClick={() => addItem(item)}>Add to Order</button>
      {orders.includes(item) && <button>Remove Item</button>}
    </div>
  );
}
