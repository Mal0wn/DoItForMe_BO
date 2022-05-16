import React from "react";
import style from "./SearchBar.module.css";
import {FaSearch} from "react-icons/fa"

export const SearchBar = () => {
    return (
       <div className={style.containSearchBar}>
           <input type="search"/>
           <FaSearch/>
       </div>
    )
}