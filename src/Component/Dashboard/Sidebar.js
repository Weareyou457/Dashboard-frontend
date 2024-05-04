import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill } from 'react-icons/bs'
import "./MainDashboard.css"
import { Link, Outlet } from 'react-router-dom'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <>
            <div className='grid-container'>
                <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
                    <div className='sidebar-title'>
                        <div className='sidebar-brand' >
                            <BsCart3 className='icon_header' /> ADMIN
                        </div>
                        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
                    </div>

                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <Link to="/main/Vendor">
                                <BsGrid1X2Fill className='icon' /> Vendor
                            </Link>
                        </li>
                        <li className='sidebar-list-item'>
                            <Link to="/main/TechPack">
                                <BsFillArchiveFill className='icon' /> Tech pack
                            </Link>
                        </li>
                        <li className='sidebar-list-item'>
                            <Link to="/main/datavendor">
                                <BsFillArchiveFill className='icon' /> Vendor Data
                            </Link>
                        </li>
                        <li className='sidebar-list-item'>
                            <Link to="/main/datatechpack">
                                <BsFillArchiveFill className='icon' /> TechPack Data
                            </Link>
                        </li>
                        <li className='sidebar-list-item'>
                            <Link to="/main/TechPack">
                                <BsFillArchiveFill className='icon' /> Costing Tool
                            </Link>
                        </li>
                        <li className='sidebar-list-item'>
                            <Link to="/main/TechPack">
                                <BsFillArchiveFill className='icon' /> Reports
                            </Link>
                        </li>

                    </ul>
                </aside>


                <Outlet />
            </div>
        </>
    )
}

export default Sidebar