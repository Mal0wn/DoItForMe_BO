import React, {useState, useMemo} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import {missions, users} from "../../db";
import style from './MissionsList.module.css';
import Pagination from "../../components/Pagination/Pagination";

export const MissionsList = () => {

    let PageSize = 3;
    const [currentPage, setCurrentPage] = useState(1)

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return missions.slice(firstPageIndex , lastPageIndex);
    }, [currentPage])


    function handlePageChange(pageNumber) {
        this.setState({activePage : pageNumber})
    }

    return (
        <div className={style.containMissionList} className="page">
            <NavBar/>
            <div className={style.containMission}>
                <ul className={style.listMissions}>
                    {currentTableData.map(item => {
                        return (
                            <li className={`itemMission ${item.status === "signal"? 'signalTrue' : 'signalFalse'}`} key={item.id}>
                                <div className={style.containImgMissList}>
                                    <img className={style.imgMissList} src={item.picture}/>
                                </div>
                                <div className={style.containTitleDesc}>
                                    <p className={style.itemTit}>{item.title}</p>
                                    <p className={style.itemPri}>{item.price}€ </p>
                                </div>
                                <p className={style.itemDesc}>{item.desc}</p>
                                <div className={style.missInfUs}>
                                    <p className={style.itemMissDat}>Publié le: {item.missionDate}</p>
                                    <p className={style.itemIdUs}>Proposé par {item.idUser}</p>
                                    <div className={style.containBtnSupp}>
                                        <button className={style.itemBtnSupp}>Supprimer</button>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={users.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </div>
    )
}