import React from 'react';
import { FoodMenuItems } from '../data/MenuItems';
import MenuItem from '../components/MenuItem';
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
        <div className="menuList">
            {FoodMenuItems.map((menuItem, key) => {
              return (<MenuItem name={menuItem.name} image={menuItem.image} price={menuItem.price} key={key} />)
            })}
        </div>
    </div>
  )
}

export default Menu