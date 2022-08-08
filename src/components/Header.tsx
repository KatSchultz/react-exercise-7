import React, { useContext } from "react";
import OrderContext from "../context/OrderContext";
import "./Header.css";

export default function Header() {
  const { orders } = useContext(OrderContext);

  return (
    <div className="header">
      <h1>Breakfast at Tiffany's</h1>
      <p>Order Count: {orders.length}</p>
    </div>
  );
}
