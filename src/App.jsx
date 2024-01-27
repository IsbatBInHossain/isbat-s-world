import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, Contact, Projects, About } from './pages'
import { ThemeContext } from './context/ThemeContext'

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const htmlElement = document.documentElement

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark')
    } else {
      setTheme('light')
    }

    if (theme === 'dark') {
      htmlElement.classList.add('dark')
      htmlElement.classList.remove('light')
    } else {
      htmlElement.classList.add('light')
      htmlElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={theme}>
      <main
        className={`bg-slate-300/20 ${
          theme === 'dark' ? 'dark:bg-[#0f172a] dark:text-white' : ''
        } h-screen overflow-y-auto`}
      >
        <Router>
          <Navbar setTheme={setTheme} theme={theme} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </main>
    </ThemeContext.Provider>
  )
}

// "Fox's islands" (https://skfb.ly/6XpAQ) by nimzu is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Fox" (https://skfb.ly/orXGp) by victory_mirosya is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "phoenix bird" (https://skfb.ly/6vLBp) by NORBERTO-3D is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "Stylized WW1 Plane" (https://skfb.ly/6ZFnM) by AntijnvanderGun is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
