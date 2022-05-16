import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from "./UserSignal.module.css"

export const UsersSignal = () => {
    return (
        <div className="page" className={style.containUserSignal}>
            <NavBar/>
        </div>
    )
}