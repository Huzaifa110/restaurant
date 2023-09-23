import React, { useState } from 'react';
import './style.css';
import Menu from '../menuApi';
import MenuCard from '../MenuCard';
import Navbar from './Navbar';

const uniqueList = [
  ...new Set(
    Menu.map((currentElement) => {
      return currentElement.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Resturant = () => {

  const [menuData, setMenuData] = useState(Menu);

  // const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

    if(category==="All"){
      setMenuData(Menu);
      return;
    };

    const updatedList = Menu.filter((currentElement) => {
      return currentElement.category === category;
    })
    setMenuData(updatedList);
  };

  return (
    <div>
      <Navbar filterItem={filterItem} menuList={uniqueList} />
      <MenuCard menuData={menuData} />
    </div>
  )
}

export default Resturant;