import { useRef } from 'react'
import Logo from '../assets/Logo.png'
import DarkLogo from '../assets/logoDark.png'
import MiniLogo from '../assets/MiniLogo.png'
import { AiOutlineMenu, AiOutlineClose, AiOutlineStar } from 'react-icons/ai'
import { FiServer } from 'react-icons/fi'
import {
  BsMap,
  BsFillSunFill,
  BsFillMoonStarsFill,
  BsChevronDown,
} from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'
import useDarkMode from '../hooks/useDarkMode'
import { useState } from 'react'

const languageList = ['Español', 'Inglés', 'Portugues']

const navList = [
  { name: 'Service', href: '#service', icon: AiOutlineStar },
  {
    name: 'Technologies',
    href: '#technologies',
    icon: FiServer,
  },
  {
    name: 'Proyectos',
    href: '#proyectos',
    icon: BsMap,
  },
]

function ToggleMode() {
  const [darkMode, toggleDarkMode] = useDarkMode()
  return (
    <>
      <button
        className='text-black dark:text-slate-100 p-2 rounded-md'
        onClick={toggleDarkMode}
      >
        {darkMode && <BsFillSunFill />}
        {!darkMode && <BsFillMoonStarsFill />}
      </button>
    </>
  )
}

function LanguageDropDown() {
  return (
    <div className='relative inline-block text-left group'>
      <button
        type='button'
        className='inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium'
      >
        <TfiWorld className='w-5 h-auto mr-2' />
        Esp <BsChevronDown className='w-4 h-auto ml-3' />
      </button>

      <div className='absolute right-0 -top-28 mt-0 py-4 -z-20 group-hover:z-50 group-hover:top-8'>
        <div className='space-y-2 bg-white border dark:bg-neutral border-gray-200 dark:border-gray-600 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto w-[180px] dark:text-gray-300 flex gap-y-1 p-4 flex-col'>
          {languageList.map((e, i) => {
            return (
              <button
                key={i}
                className='dark:bg-neutral hover:text-[#5E47D2] dark:hover:text-[#ab9df0] flex gap-3 items-center'
              >
                <TfiWorld className='w-5 h-auto mr-2' />
                {e}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function MobileLanguageDropDown() {
  const [currentDropDown, setCurrentDropdown] = useState(languageList[0])
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <div>
      <button
        className='border-b-2 inline-flex items-center gap-2 border-gray-300 px-4 py-4 w-full justify-between'
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {currentDropDown} <BsChevronDown />
      </button>
      {showDropdown && (
        <div className='pl-7'>
          {languageList
            .filter((e) => e !== currentDropDown)
            .map((e) => (
              <>
                <button
                  // onClick={closeMenu}
                  className='border-b-2 inline-flex items-center gap-2 border-gray-300 px-4 py-4 w-full hover:text-[#5E47D2]'
                  onClick={() => setCurrentDropdown(e)}
                >
                  {e}
                </button>
              </>
            ))}
        </div>
      )}
    </div>
  )
}
export default function Header() {
  const mobileMenu = useRef(null)
  const [darkMode, toggleDarkMode] = useDarkMode()

  const openMenu = () => {
    mobileMenu.current.style.height = '100%'
  }
  const closeMenu = () => {
    mobileMenu.current.style.height = '0%'
  }
  return (
    <>
      <div
        className='h-0 w-full fixed z-[999] overflow-y-hidden top-0 left-0 text-black font-medium dark:text-[#FFF] overflow-x-hidden duration-700 transition-all bg-white  dark:bg-neutral'
        ref={mobileMenu}
      >
        <div className='border-b-2 border-gray-300 px-4 py-4 flex justify-between'>
          <div>
            <img src={MiniLogo} alt='' />
          </div>
          <p>Menú</p>
          <button onClick={closeMenu}>
            <AiOutlineClose className='w-6 h-auto' />
          </button>
        </div>
        <div className='mt-6 px-6 w-full'>
          {navList.map((e) => {
            return (
              <a
                href={e.href}
                key={e.name}
                onClick={closeMenu}
                className='border-b-2 inline-flex items-center gap-2 border-gray-300 px-4 py-4 w-full hover:text-[#5E47D2] dark:hover:text-[#9785f5]'
              >
                <e.icon />
                {e.name}
              </a>
            )
          })}
        </div>
        <div className='mt-10 px-6'>
          <p className='border-b-2 inline-flex items-center justify-between gap-2 border-gray-300 px-4 py-4 w-full'>
            Oscuro
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='mySwitch'
                checked={darkMode}
                onChange={toggleDarkMode}
                className='hidden'
              />
              <label
                htmlFor='mySwitch'
                className='cursor-pointer flex items-center justify-between w-14 py-0.5 px-1 rounded-full bg-[#212020] dark:bg-white transition-transform duration-300 ease-in-out'
              >
                <div
                  className={`w-6 h-6 flex justify-center items-center rounded-full shadow-md transform ${
                    darkMode
                      ? 'translate-x-full bg-[#212020]'
                      : 'translate-x-0 bg-white'
                  }`}
                >
                  {darkMode && <BsFillSunFill />}
                  {!darkMode && <BsFillMoonStarsFill />}
                </div>
              </label>
            </div>
          </p>
          <MobileLanguageDropDown />
        </div>
      </div>
      {/* ************************* */}
      <header className='px-4 py-2.5 bg-white flex justify-between md:justify-around items-center border-b border-gray-50 dark:border-gray-300 dark:bg-darkSecondary dark:text-gray-200 shadow-md w-full top-0 sticky z-50'>
        <div>
          <a onClick={() => window.scrollTo(0, 0)} className='cursor-pointer'>
            <img src={Logo} className='block dark:hidden' alt='logo' />
            <img src={DarkLogo} className='hidden dark:block' alt='logo' />
          </a>
        </div>
        <nav className='md:block hidden'>
          <ul className='flex gap-2 font-semibold'>
            {navList.map((e) => {
              return (
                <li key={e.name}>
                  <a href={e.href}>{e.name}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className='gap-3 items-center md:flex hidden'>
          <ToggleMode />
          <LanguageDropDown />
          <button className='border-2 px-4 py-2.5 rounded-full font-bold border-[#220F80] text-[#220F80] dark:border-gray-200 dark:text-gray-200 hover:scale-95'>
            Conversemos
          </button>
        </div>
        <div className='block md:hidden'>
          <button onClick={openMenu}>
            <AiOutlineMenu className='w-6 h-auto' />
          </button>
        </div>
      </header>
    </>
  )
}
