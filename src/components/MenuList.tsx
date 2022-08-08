import React, { useContext } from "react";
import OrderContext from "../context/OrderContext";
import { Item } from "../types";
import MenuItem from "./MenuItem";

export default function MenuList() {
  const { addItem } = useContext(OrderContext);

  const menuArray: Item[] = [
    {
      id: "abc123",
      name: "Chicken and Waffles",
      description:
        "Fluffy waffles topped with lightly breaded chicken and maple syrup",
      price: 7.5,
      vegetarian: false,
      calories: 1100,
    },
    {
      id: "abc124",
      name: "Eggs benedict",
      description:
        "English muffin, each topped with Canadian bacon, a poached egg, and hollandaise sauce.",
      price: 6.75,
      vegetarian: false,
      calories: 550,
    },
    {
      id: "abc125",
      name: "Avocado Toast",
      description:
        "Smashed avocado, cojita cheese, shaved veg, cilantro, green chilli, watercress",
      price: 10.75,
      vegetarian: true,
      calories: 640,
    },
    {
      id: "abc126",
      name: "Beans on Toast",
      description:
        "Roasted mushrooms, poached egg, sweet peppers, pistachios, cashew butter",
      price: 9.25,
      vegetarian: true,
      calories: 800,
    },
    {
      id: "abc127",
      name: "Hash wrap",
      description:
        "Potato hash, smoked pork belly, egg, kale salad, bagna cauda sauce",
      price: 10.0,
      vegetarian: false,
      calories: 875,
    },
    {
      id: "abc128",
      name: "Cinnamon Roll",
      description:
        "Freshly baked rolls made from scratch topped with vanilla frosting",
      price: 4.5,
      vegetarian: true,
      calories: 970,
    },
    {
      id: "abc129",
      name: "Lox Bagel",
      description:
        "Smoked salmon, cream cheese and capers on top of a freshly baked sesame seed bagel",
      price: 8.5,
      vegetarian: false,
      calories: 1050,
    },
  ];

  return (
    <div>
      {menuArray.map((item) => (
        <MenuItem item={item} />
      ))}

      {/* {menuArray.map((item) => (
        <div key={item.id} className="menu-item">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.calories}</p>
          <p>{item.price}</p>
          <p>{item.vegetarian}</p>
          <button onClick={() => addItem(item)}>Add to Order</button>
        </div>
      ))} */}
    </div>
  );
}
