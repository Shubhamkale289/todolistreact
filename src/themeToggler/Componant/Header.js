import React, { useContext } from 'react'
import ThemeContext from '../ThemeToggler'
import ThemeColors from '../Utils/ThemeColors'

export default function Header() {
    const theme = useContext(ThemeContext);
    const themeCSS = ThemeColors[theme]
    console.log(themeCSS);
    // console.log(theme);
  return (
    <div>
      header
    </div>
  )
}
