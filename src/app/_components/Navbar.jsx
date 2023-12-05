'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Profile from './Profile'
import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'
const Navbar = () => {
    const [active, setActive] = useState(1)

    const links = [
        { id: 1, text: 'About', href: '/' },
        { id: 2, text: 'Services', href: '/' },
        { id: 3, text: 'Contact', href: '/' },
      ];
    
      const handleLinkClick = (id) => {
        setActive(id);
      };
    return (
       <div className='nav-container z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
         <nav>
            <Logo />
            <div className='links'>
            <div>
            {links.map((link) => (
              <Link
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={active === link.id ? 'link-active' : null}
                href={link.href}
              >
                {link.text}
              </Link>
            ))}
          </div>
            </div>
            <div className='right-nav'>
                <ThemeSwitch />
                <Profile />
            </div>
        </nav>
       </div>
    )
}

export default Navbar