'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../../Logo';
import ThemeSwitch from '../../ThemeSwitch';
import Profile from '../../Profile';
import { MdDashboard } from "react-icons/md";
import { motion, useAnimate } from 'framer-motion'
import { FaAngleDown } from "react-icons/fa";
import Link from 'next/link';
const options = [
    { id: 1, label: 'Dashboard', href: '/dashboard', },
    {
        id: 2,
        label: 'Product',
        href: '/dashboard',
        options: [
            { label: 'Subproduct', href: '/product' },
            { label: 'Subproduct2', href: '/product' }
        ]
    },
    { id: 3, label: 'Users', href: '/dashboard' },

]
const Layout01 = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [scope, animate] = useAnimate()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };




    return (
        <div ref={scope} className={`layout_01  `}>
            <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <div id="main_content">
                <SidebarContent isSidebarOpen={isSidebarOpen} options={options} />
                <div className={`content ${!isSidebarOpen ? "content_closed" : null}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

const SidebarContent = ({ isSidebarOpen, options }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (index) => {
        setSelectedOption(index === selectedOption ? null : index);
    };


    const Items = () => {
        return options.map((option, index) => (
            <div>
                <div key={option.id} className="sidebar_item" onClick={() => {
                    if(option.options){
                        handleClick(index)
                    }
                }}>
                    <span >{option.label}</span>
                    {option.options && (
                        <FaAngleDown onClick={() => handleClick(index)} />
                    )}
                </div>
                <div className='subitem_container'>
                    {selectedOption === index &&
                        option.options &&
                        option.options.map((subOption) => (
                            <Link href={option.href} key={subOption.label} className="sidebar_subitem">
                                <span>{subOption.label}</span>
                            </Link>
                        ))}
                </div>
            </div>
        ));
    };
    return (
        <div className={`sidebar ${!isSidebarOpen ? "sidebar-closed" : null}`} >
            <div className={`sidebar_content`}>
                <p className='sidebar_title'>Menu:</p>
                <div className='sidebar_menu'>
                    <Items />
                    {/* <div className="sidebar_item">
                    <span>Dashboard</span>
                </div>
                <div className="sidebar_item">
                    <span>Dashboard</span>
                </div>
                <div className="sidebar_item">
                    <span>Dashboard</span>
                </div> */}

                </div>
            </div>
        </div>
    )
}



const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
    return (
        <div id="navbar">
            <div className="nav-grid">
                <div className='nav-logo'>
                    <Logo />
                </div>
                <div className='nav-right'>
                    <div className='nav_start'>
                        <Burger
                            toggleSidebar={toggleSidebar}
                            isSidebarOpen={isSidebarOpen}
                        />
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

const Burger = ({ toggleSidebar, isSidebarOpen }) => {
    const [scope, animate] = useAnimate()
    return (
        <div className={`burger ${isSidebarOpen && 'burger-x'}`} onClick={toggleSidebar}>
            <motion.span
                // initial={{rotate: 0, y: 0}}
                // animate={isSidebarOpen ? {rotate: 45, y: 4 , x: 2} : {rotate: 0, y: 0}}
                className='burger_line line_1'>

            </motion.span>
            <motion.span
                // initial={{rotate: 0, y: 0}}
                // animate={isSidebarOpen ? {rotate: -45, y: -4, x: 0} : {rotate: 0, y: 0}}
                className='burger_line line_1'>
            </motion.span>

        </div>
    )
}

export default Layout01