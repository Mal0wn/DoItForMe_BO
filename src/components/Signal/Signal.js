import React from "react";
import style from "./Signal.module.css"
import {users} from "../../db";
import {
    Link
} from 'react-router-dom';

export const Signal = () => {
    let signalement = false;

    if (signalement == true) {
        return(
            <div className={style.signalInfos}>
                <div className={style.signalBy}>
                    <div className={style.left}>
                        <p>Signalé par : { users.name[0]} </p>
                        <img className={style.profilPictSign} src={users.profilPicture[0]} alt="Photo profil"/>
                        <Link to="/discussion"> Session Chat</Link>
                    </div>


                </div>
            </div>
        )
    }else {
        return (
            <div className={style.noSignal}>

            </div>
        )
    }


}