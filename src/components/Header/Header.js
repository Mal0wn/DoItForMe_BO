import React, { useState } from 'react';
import {  FaArchive } from "react-icons/fa";
import {  FiLogOut, FiUser, FiStopCircle } from "react-icons/fi";
import {  RiAdvertisementLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import elon from '../../assets/elon.jpeg';
import style from  "./Header.module.css";
import {
    Link
} from 'react-router-dom';



const Header = () => {

    return (
            <div  className={style.header}>
                <nav className={style.headerNav}>
                    <div className={style.logoText}>
                        <img className={style.imgUser} src={elon} alt={'image user'} />
                        <p> User Name</p>
                    </div>
                    <ul className={style.listLink}>
                        <Link to="/users">
                            <li className={style.navLeftItem} active="true" > <FiUser /> Utilisateurs</li>
                        </Link>
                        <Link to="/missions">
                            <li className={style.navLeftItem} ><FaArchive /> Annonces</li>
                        </Link>
                        <Link to="/usersSignal">
                            <li className={style.navLeftItem} ><RiAdvertisementLine /> Signalement utilisateurs</li>
                        </Link>
                        <Link to="/missionsSignal">
                            <li className={style.navLeftItem}><FiStopCircle /> Signalements annonces</li>
                        </Link>
                        <Link to="/settings">
                            <li className={style.navLeftItem} ><BiCog /> Settings</li>
                        </Link>
                    </ul>
                    <button className={style.deco} ><FiLogOut /> Deconnexion</button>
                </nav>
            </div>


    );
};

export default Header;
