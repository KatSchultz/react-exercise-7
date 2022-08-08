import React, { useContext } from "react";
import OrderContext from "../context/OrderContext";
import "./Sidebar.css";

export default function Sidebar() {
  const { orders } = useContext(OrderContext);
  return (
    <div className="">
      <ol>
        {orders.map((item, index) => (
          <li key={index} className="sidebar-content">
            <p>{item.name}</p>
            <p>{item.price.toFixed(2)}</p>
          </li>
        ))}
      </ol>
      <div>
        <p>Total: {orders.reduce((a, item) => a + item.price, 0).toFixed(2)}</p>
      </div>
    </div>
  );
}
