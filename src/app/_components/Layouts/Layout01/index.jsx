'use client'
import React from 'react'

const Layout01 = ({children}) => {
    return (
        <div className='layout01_wrapper'>
            <div className="sidebar"></div>
            <div className="main_content">
                <div className="main_navbar"></div>
                <div className="main_content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout01