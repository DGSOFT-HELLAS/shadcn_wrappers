'use client'
import React, { useEffect, useState } from 'react'
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes"
import { FaMoon } from "react-icons/fa";

const ThemeSwitch = ({mr, ml}) => {
  const { setTheme } = useTheme()
  const [localTheme, setLocalTheme ] = useState(true)


  const handleClick = () => {
    console.log('toggle theme')
        setTheme('dark')
        if(localTheme === false) {
          setLocalTheme(true)
          setTheme('lignt')
        } else {
          setLocalTheme(false)
          setTheme('dark')
        }
          
          
  }
  return (
    <div onClick={handleClick} className={`theme-switch bg-muted`} style={{marginRight: mr, marginLeft: ml}}  >
      <div className='inner-switch' style={localTheme ? {left: '10%'} : {left: '85%', transform: "translateX(-85%)"} }>
       
        {localTheme ? <FiSun /> :<FaMoon />
}
      </div>
    </div>
  )
}

export default ThemeSwitch