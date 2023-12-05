'use client'
import React, { useState } from 'react'
import Logo from '../../Logo';
import ThemeSwitch from '../../ThemeSwitch';
import Profile from '../../Profile';
import { MdDashboard } from "react-icons/md";
import {motion, useAnimate} from 'framer-motion'
const Layout01 = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [scope, animate] = useAnimate()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
         animate("#sidebar", {
            width: !isSidebarOpen ? "260px" : "0",
            display:  isSidebarOpen ? "" : "block"
            
        }, {duration: 0.5, ease: "easeInOut"})
        animate("#main_content", {
            marginLeft: isSidebarOpen ? "0" : "260px",
        }, {duration:  0.5, ease: "easeInOut"} )
        animate("#sidebar_content", {
            opacity: '100%',
        }, {duration:  0.5, ease: "easeInOut"
        })
           
        
    };

    return (
        <div ref={scope} className={`layout_01  `}>
            <div id={"sidebar"} >
                <div className='logo_container'>
                    <Logo />
                </div>
                <div id='sidebar_content'>
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
            <div id="main_content" /* className={`main-content ${isSidebarOpen ? 'main-open' : 'main-closed'}`} */ >
                <div className={`navbar ${isSidebarOpen ? null : 'nav-closed'}`}>
                    <div className='nav_start'>
                        <button onClick={toggleSidebar}>Toggle Sidebar</button>
                    </div>
                    <div className='nav_end'>
                        <ThemeSwitch mr="5px" />
                        <Profile />
                    </div>
                </div>

                <div className="content">
                    {/* Main content goes here */}
                    
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


export default Layout01