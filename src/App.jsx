import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, Contact, Projects, About } from './pages'

// "Fox's islands" (https://skfb.ly/6XpAQ) by nimzu is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

export default function App() {
  return (
    <main className=' bg-slate-300/20 h-[100vh'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}
