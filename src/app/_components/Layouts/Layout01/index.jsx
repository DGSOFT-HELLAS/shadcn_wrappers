'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../../Logo';
import ThemeSwitch from '../../ThemeSwitch';
import Profile from '../../Profile';
import { MdDashboard } from "react-icons/md";
import { motion, useAnimate, stagger} from 'framer-motion'
import { FaAngleDown } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillCartFill } from "react-icons/bs";
import { FaAngleUp } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { useRouter } from 'next/navigation';


import Link from 'next/link';
import PinnedNavbar from '../../PinnedNavbar';
const options = [
    {
        id: 1,
        label: 'Dashboard',
        href: '/product',
        icon: <MdDashboard />
    },
    {
        id: 2,
        label: 'Product',
        href: '/dashboard',
        icon: <BsFillCartFill />
        ,
        options: [
            { label: 'Subproduct', href: '/product' },
            { label: 'Subproduct2', href: '/product' }
        ]
    },
    {
        id: 3,
        label: 'Users',
        href: '/dashboard',
        icon: <IoPersonSharp />
    },

]
const Layout01 = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [scope, animate] = useAnimate()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };




    return (
        <>
            <SidebarContent isSidebarOpen={isSidebarOpen} options={options} />
            <div ref={scope} className={`layout_01`}>
                <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <div id="main_content">
                    <div className={`content ${!isSidebarOpen ? "content_closed" : null}`}>
                        <PinnedNavbar />
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

const SidebarContent = ({ isSidebarOpen, options }) => {
    const [controls, animate] = useAnimate()
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (index) => {
        setSelectedOption(index === selectedOption ? null : index);
    };


    const Items = () => {
        return options.map((option, index) => (
            <div  key={index}>
                <div
                   
                    className="sidebar_item"
                    onClick={() => {
                        if (option.options) {
                            handleClick(index)
                        } else {
                            router && router.push(option.href)
                        }

                    }}>
                    <div className={`sidebar_item_divicon ${selectedOption === index ? "active" : null}`}>
                        <div className='sidebar_icon'>{option.icon && option.icon}</div>
                        <span>{option.label}</span>
                    </div>
                    {option.options && (
                        <>
                            {selectedOption === index ? (
                                <FaAngleUp onClick={() => handleClick(index)} />) : (
                                <FaAngleDown onClick={() => handleClick(index)} />
                            )}
                        </>
                    )}
                </div >
                <div className='subitem_container'>
                    {selectedOption === index &&
                        option.options &&
                        option.options.map((subOption, subIndex) => (
                            <Link key={subIndex} href={option.href} className="sidebar_subitem">
                                {subOption.icon}
                                <span>{subOption.label}</span>
                            </Link>
                        ))}
                </div>
            </div>
        ));
    };
    return (
        <aside className={`sidebar ${!isSidebarOpen ? "sidebar-closed" : null} `} >
            <div className={`sidebar_content`}>
                <p className='sidebar_title'>MAIN MENU:</p>
                <div className='sidebar_menu'>
                    <Items />
                    <p className='sidebar_title'>SETTINGS:</p>
                    <SidebarItem label="Settings" href="/settings" icon={<IoSettings />} />
                    <SidebarItem label="Support" icon={<FaHeadphonesSimple />} />
                </div>
            </div>
        </aside>
    )
}


const SidebarItem = ({ label, selectedOption, index, icon, options }) => {
    return (
        <div className="sidebar_item" onClick={() => { handleClick(index) }}>
            <div className='sidebar_item_divicon'>
                <div className='sidebar_icon'>{icon && icon}</div>
                <span>{label}</span>
            </div>
            <>
                {options && (
                    <>
                        {selectedOption === index ? (
                            <FaAngleUp onClick={() => handleClick(index)} />) : (
                            <FaAngleDown onClick={() => handleClick(index)} />
                        )}
                    </>
                )}
            </>
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