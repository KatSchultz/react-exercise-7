import { createContext } from "react";
import { Item } from "../types";

export interface OrderContextModel {
  orders: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}

const defaultValue: OrderContextModel = {
  orders: [],
  addItem(item) {},
  removeItem(id) {},
};

const OrderContext = createContext<OrderContextModel>(defaultValue);

export default OrderContext;
