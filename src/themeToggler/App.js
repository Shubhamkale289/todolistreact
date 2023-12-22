import React from 'react'
import ThemeContext from './ThemeToggler'
import BlogSection from './Componant/BlogSection'
import Header from './Componant/Header'

export default function App() {
    const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={theme} >
        <div>
            <Header />
            <main>
                <BlogSection />
            </main>
        </div>
    </ThemeContext.Provider>
  )
}
