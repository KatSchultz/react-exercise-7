import React, { ReactNode, useState } from "react";
import { Item } from "../types";
import OrderContext, { OrderContextModel } from "./OrderContext";

interface Props {
  children: React.ReactNode;
}

export default function OrderContextProvider({ children }: Props) {
  const [items, setItems] = useState<Item[]>([]);
  const [orders, setOrders] = useState<Item[]>([]);

  function addItem(item: Item) {
    setOrders((prev) => [...prev, item]);
  }

  function removeItem(id: string) {
    const newArr = items.filter((item) => item.id !== id);

    setItems(newArr);
  }

  return (
    <OrderContext.Provider value={{ orders, addItem, removeItem }}>
      {children}
    </OrderContext.Provider>
  );
}
