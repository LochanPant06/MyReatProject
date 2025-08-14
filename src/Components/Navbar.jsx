import React, { Component } from "react";
import Styles from "./style.module.css";

// Css modules seekhne ke liye ise use kara hai yaha per

function Navbar({data}) {
  return (
    <div className="w-full px-4 py-3 flex justify-between items-center">
      <h3 className={`${Styles.a} ${Styles.b}`}>Orange</h3>
      <div className="flex p-2 px-4 gap-3 bg-orange-600 text-sm rounded-md text-white" >
        <h3>Favorites</h3>
        <h4>{data.filter(item => item.added).length}</h4>

{/* Abb hum yaha pe data ko direct access kar sakte jo data parent(App) mai hai */}

      </div>
    </div>
  );
} 
export default Navbar;
