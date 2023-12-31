import { useRef } from 'react'
// import Logo from '../assets/Logo.png'
// import DarkLogo from '../assets/logoDark.png'
// import MiniLogo from '../assets/MiniLogo.png'
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
import { useTranslation } from 'react-i18next';

const navList = [
  {
    name: 'Services',
    href: '#services',
    icon: AiOutlineStar
  },
  {
    name: 'Skills',
    href: '#skills',
    icon: FiServer,
  },
  {
    name: 'Projects',
    href: '#projects',
    icon: BsMap,
  },
  {
    name: 'About me',
    href: '#aboutme',
    icon: BsMap,
  }
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
  const { t, i18n } = useTranslation();
  const languageList2 = t('languageList', { returnObjects: true });
  const dropdownButton = t('dropdownButton', { returnObjects: true });

  const changeLanguage = (i) => {
    console.log(dropdownButton.text);
    if (i === 0) {
      i18n.changeLanguage('es');
    }
    if (i === 1) {
      i18n.changeLanguage('en');
    }
    if (i === 2) {
      i18n.changeLanguage('pt');
    }
    // i18n.changeLanguage(lng);
  };


  return (
    <div className='relative inline-block text-left group'>
      <button
        type='button'
        className='inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium'
      >
        <TfiWorld className='w-5 h-auto mr-2' />
        {dropdownButton.text} <BsChevronDown className={`w-4 h-auto ml-3 chevronDown`} />
      </button>

      <div className='absolute right-0 -top-28 mt-0 py-4 -z-20 group-hover:z-50 group-hover:top-8'>
        <div className='space-y-2 bg-white border dark:bg-neutral border-gray-200 dark:border-gray-600 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto w-[180px] dark:text-gray-300 flex gap-y-1 p-4 flex-col'>
          {languageList2.map((e, i) => {
            return (
              <button
                key={i}
                className='dark:bg-neutral hover:text-[#5E47D2] dark:hover:text-[#ab9df0] flex gap-3 items-center'
                onClick={() => changeLanguage(i)}
              >
                {e}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const languageList = ['Español', 'Inglés', 'Portugues']

function MobileLanguageDropDown() {
  // const [currentDropDown, setCurrentDropdown] = useState(languageList[0])
  const [showDropdown, setShowDropdown] = useState(false)

  const { t, i18n } = useTranslation();
  const languageList2 = t('languageList', { returnObjects: true });
  const dropdownButton = t('dropdownButton', { returnObjects: true });

  const changeLanguage = (i) => {
    console.log(dropdownButton.text);
    if (i === 0) {
      i18n.changeLanguage('es');
    }
    if (i === 1) {
      i18n.changeLanguage('en');
    }
    if (i === 2) {
      i18n.changeLanguage('pt');
    }
    // i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button
        className='border-b-2 inline-flex items-center gap-2 border-gray-300 px-4 py-4 w-full justify-between'
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {dropdownButton.textMobile} <BsChevronDown />
      </button>
      {showDropdown && (
        <div className='pl-7'>
          {languageList2
            // .filter((e) => e !== i18n.resolvedLanguage)
            .map((e, i) => {
              return (
              // (e) => (
                <button
                  // onClick={closeMenu}
                  key={i}
                  className='border-b-2 inline-flex items-center gap-2 border-gray-300 px-4 py-4 w-full hover:text-[#5E47D2]'
                  // onClick={() => setCurrentDropdown(e)}
                  onClick={() => changeLanguage(i)}
                >
                  {e}
                </button>
            )})}
        </div>
      )}
    </div>
  )
}
function scrollToElement(id) {
  const element = document.getElementById(id)
  const header = document.getElementsByTagName('header')
  if (!element || !header) {
    return
  }
  const headerHeight = header[0].offsetHeight
  const offset = element.offsetTop - headerHeight
  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  })
}
export default function Header() {
  const MiniLogo = '/assets/MiniLogo.png'
  const Logo = '/assets/Logo.png'
  const DarkLogo = '/assets/logoDark.png'

  const mobileMenu = useRef(null)
  const [darkMode, toggleDarkMode] = useDarkMode()

  const openMenu = () => {
    mobileMenu.current.style.height = '100%'
  }
  const closeMenu = () => {
    mobileMenu.current.style.height = '0%'
  }

  const { t, i18n } = useTranslation();
  const [navList, setNavList] = useState([
    {
      name: 'Services',
      href: '#services',
      icon: AiOutlineStar,
    },
    {
      name: 'Skills',
      href: '#skills',
      icon: FiServer,
    },
    {
      name: 'Projects',
      href: '#projects',
      icon: BsMap,
    },
    {
      name: 'About me',
      href: '#aboutme',
      icon: BsMap,
    }

  ]);
  const letsTalk = t('letsTalk');
  navList[0].name = t('ServiceSection.menu');
  navList[1].name = t('SkillsSection.menu');
  navList[2].name = t('RecentProjectsSection.menu');
  navList[3].name = t('AboutMeSection.menu');
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
                // onClick={closeMenu}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToElement(e.href.slice(1))
                  closeMenu()
                }}
                className='border-b-2 inline-flex items-center gap-2 border-gray-300 px-4 py-4 w-full hover:text-[#5E47D2] dark:hover:text-[#9785f5]'
              >
                <e.icon />
                {e.name}
              </a>
            )
          })}
        </div>
        <div className='mt-10 px-6'>
          <div className='border-b-2 inline-flex items-center justify-between gap-2 border-gray-300 px-4 py-4 w-full'>
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
                  className={`w-6 h-6 flex justify-center items-center rounded-full shadow-md transform ${darkMode
                    ? 'translate-x-full bg-[#212020]'
                    : 'translate-x-0 bg-white'
                    }`}
                >
                  {darkMode && <BsFillSunFill />}
                  {!darkMode && <BsFillMoonStarsFill />}
                </div>
              </label>
            </div>
          </div>
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
          <ul className='flex gap-10 font-semibold'>
            {navList.map((e) => {
              return (
                <li key={e.name}>
                  <a href={e.href}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToElement(e.href.slice(1))
                  }}>{e.name}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className='gap-3 items-center md:flex hidden'>
          <ToggleMode />
          <LanguageDropDown />
          <button
            className='border-2 px-4 py-2.5 rounded-full font-bold border-[#220F80] text-[#220F80] dark:border-gray-200 dark:text-gray-200 hover:scale-95'
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=51942603349', '_blank')}
          >
            {letsTalk}
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
