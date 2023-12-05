'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../../Logo';
import ThemeSwitch from '../../ThemeSwitch';
import Profile from '../../Profile';
import { MdDashboard } from "react-icons/md";
import { motion, useAnimate } from 'framer-motion'
import { set } from 'date-fns';
const Layout01 = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [scope, animate] = useAnimate()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };




    return (
        <div ref={scope} className={`layout_01  `}>
            <Navbar toggleSidebar={toggleSidebar} />
            <div id="main_content">
                <div className={`sidebar ${!isSidebarOpen ? "sidebar-closed" : null}`} >
                    <div className={`sidebar_content`}>
                        <p className='sidebar_title'>Menu:</p>
                        <div className='sidebar_menu'>
                            <div className="sidebar_item">
                                <MdDashboard />
                                <span>Dashboard</span>
                            </div>
                            <div className="sidebar_item">
                                <MdDashboard />
                                <span>Dashboard</span>
                            </div>
                            <div className="sidebar_item">
                                <MdDashboard />
                                <span>Dashboard</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`content ${!isSidebarOpen ? "content_closed" : null}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};


const SidebarItem = () => {

    return (
        <div className='sidebar_item'>

            <p>Item</p>
        </div>
    )
}


const Navbar = ({ toggleSidebar }) => {
    return (
        <div id="navbar">
            <div className="nav-grid">
                <div className='nav-logo'>
                    <Logo />
                </div>
                <div className='nav-right'>
                    <div className='nav_start'>
                        <Burger toggleSidebar={toggleSidebar} />
                    </div>
                    <div className='nav_end'>
                        <ThemeSwitch mr="5px" />
                        <Profile />
                    </div>
                </div>
            </div>

        </div>
    )
}

const Burger = ({toggleSidebar}) => {
    return (
        <div className='burger' onClick={toggleSidebar}>
            <span className='burger_line'></span>
            <span className='burger_line'></span>
            <span className='burger_line'></span>
        </div>
    )
}

export default Layout01