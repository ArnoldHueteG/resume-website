import { IoLogoWhatsapp } from 'react-icons/io'
import Logo from '../assets/LogoWhite.png'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

function Footer() {
  const navLinks = [
    { name: 'Mis servicios', href: '#' },
    {
      name: 'Tecnologías',
      href: '#',
    },
    {
      name: 'Proyectos',
      href: '#',
    },
    {
      name: 'Acerca de mi',
      href: '#',
    },
  ]
  return (
    <footer className='bg-[#220F80] py-16'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex flex-col md:flex-row w-full justify-between'>
          <h2 className='text-white text-4xl font-semibold'>
            ¿Tienes alguna consultas?
          </h2>
          <button className='px-5 py-3 rounded-full bg-white dark:text-black text-xl flex items-center gap-2 w-full justify-center mt-12 md:mt-0 md:w-auto text-center'>
            Conversemos <IoLogoWhatsapp />
          </button>
        </div>
        <div className='py-5'></div>
        <div className='border-y border-[#5E47D2]/60 py-10'>
          <ul className='flex flex-col gap-y-4 md:flex-row justify-between md:items-center text-[#EDF0FF]'>
            <img className='w-5/12 md:w-auto mb-12 md:mb-0 h-auto' src={Logo} />
            {navLinks.map((e) => (
              <a href={e.href} key={e.name}>
                <li className='text-white'>{e.name}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className='mt-5 w-full flex justify-between items-center text-[#FFF]'>
          <div>
            <p>© 2023 Arnold Huete</p>
          </div>
          <div>
            <div className='flex gap-7 my-3 justify-center md:justify-start w-full'>
              <div className='flex gap-2 text-[#FFF] items-center text-lg'>
                <AiFillGithub />
                <a href='#' className='hover:underline'>
                  Github
                </a>
              </div>
              <div className='flex gap-2 text-[#FFF] items-center text-lg'>
                <AiFillLinkedin />
                <a href='#' className='hover:underline'>
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
