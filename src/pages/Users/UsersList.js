import React , {useState, useMemo} from  "react";
import { FaSkull  } from "react-icons/fa";
import style from './UsersList.module.css';
import { users} from "../../db.js";
import {Rating} from "../../components/Rating/Rating";
import NavBar from "../../components/NavBar/NavBar";

import {
    Link
} from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination'



const ItemListUser = () => {

     let PageSize = 7;
     const [currentPage, setCurrentPage] = useState(1)

        const currentTableData = useMemo(() => {
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
            return users.slice(firstPageIndex , lastPageIndex);
        }, [currentPage])


    function handlePageChange(pageNumber) {
        this.setState({activePage : pageNumber})
    }

    return (
        <div className="page" className={style.usersContainer}>
            <NavBar/>
            <div className={style.column}>
                <table className={style.containList}>
                    <thead>
                    <tr>
                        <th></th>
                        <th className={style.headTab}></th>
                        <th className={style.headTab}>First Name</th>
                        <th className={style.headTab}>Last Name</th>
                        <th className={style.headTab}>Email</th>
                        <th className={style.headTab}>Phone</th>
                        <th className={style.headTab}>Rating</th>
                        <th className={style.headTab}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentTableData.map(item => {
                        return (
                            <tr  key={item.id}>
                                <td className={`itemSignalUser ${item.status === "signal"? 'userSignalTrue' : 'userSignalFalse'}`}><FaSkull/></td>
                                <td> <img className={style.imgUserList} src={item.profilPicture}/></td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.mail}</td>
                                <td>{item.phone}</td>
                                <td><Rating star = {item.rate}/></td>
                                <td className={style.btnDetail}><Link to="/userDetail/">Détails</Link></td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
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

export default ItemListUser;