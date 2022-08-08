import React, { useContext } from "react";
import OrderContext from "../context/OrderContext";

export default function Sidebar() {
  const { orders } = useContext(OrderContext);
  return (
    <div>
      {orders.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
      <div>
        <p>Total: {orders.reduce((a, item) => a + item.price, 0)}</p>
      </div>
    </div>
  );
}
