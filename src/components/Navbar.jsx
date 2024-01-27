import { NavLink, useLocation } from 'react-router-dom'
import { darkmode, lightmode } from '../assets/icons'

const Navbar = ({ theme, setTheme }) => {
  const location = useLocation()
  const pathname = location.pathname

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light')
    else setTheme('dark')
  }

  return (
    <header className=' header'>
      <NavLink
        to='/'
        className=' w-10 h-10 flex justify-center items-center rounded-full font-bold shadow-md'
      >
        <img
          src='/favicon.ico'
          className={`w-full h-full object-contain ${
            pathname === '/'
              ? 'opacity-40 hover:opacity-100 transition-all duration-300'
              : ' '
          }`}
        />
      </NavLink>
      <nav className=' flex text-lg gap-7 font-medium'>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive
              ? 'text-blue-500 dark:text-blue-300'
              : 'text-black dark:text-ash'
          }
        >
          Projects
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? 'text-blue-500 dark:text-blue-300'
              : 'text-black dark:text-ash'
          }
        >
          About
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive
              ? 'text-blue-500 dark:text-blue-300'
              : 'text-black dark:text-ash'
          }
        >
          Contact
        </NavLink>
        {pathname !== '/' && (
          <button
            className='rounded-full dark:bg-ash bg-slate-200 p-2 w-8 h-8'
            onClick={toggleTheme}
          >
            <img
              src={theme === 'dark' ? darkmode : lightmode}
              alt='changeTheme'
              className='object-contain select-none'
            />
          </button>
        )}
      </nav>
    </header>
  )
}

export default Navbar
