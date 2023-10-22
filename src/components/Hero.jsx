import XlHero from '../assets/XlHero.png'
import MobileHero from '../assets/MobileHero.png'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

function Hero() {
  return (
    <section
      id='hero'
      className='grid grid-cols-1 gap-12 md:grid-cols-2 pt-12 container mx-auto max-w-6xl px-4'
    >
      <div className='flex items-center order-2 md:order-1'>
        <article className='block'>
          <p className='text-2xl text-[#757575] dark:text-gray-200'>¡Hola!</p>
          <h1 className='text-3xl md:text-5xl font-bold leading-[1.1] mt-3'>
            <span className='text-[#5E47D2] dark:text-[#72a5fc]'>
              Soy Arnold,
            </span>
            <br />
            <span className='mt-2 block'>Software Engineer</span>
          </h1>
          <p className='text-[#424242] dark:text-gray-300 mt-5'>
            Cuento con experiencia en la optimización de soluciones en la nube,
            construyendo desde el Análisis de Negocios hasta soluciones
            digitales integrales entre datos y backend. Diseño soluciones
            sólidas que potencian la eficiencia y la innovación.
          </p>
          <button className='btn-primary mt-6 mb-3 md:w-auto w-full'>
            ¡Conversemos!
          </button>
          <div className='flex gap-7 my-3 justify-center md:justify-start w-full'>
            <div className='flex gap-2 text-[#0A0A0A] dark:text-slate-100 items-center text-lg'>
              <AiFillGithub />
              <a href='#' className='hover:underline'>
                Github
              </a>
            </div>
            <div className='flex gap-2 text-[#0A0A0A] dark:text-slate-100 items-center text-lg'>
              <AiFillLinkedin />
              <a href='#' className='hover:underline'>
                Linkedin
              </a>
            </div>
          </div>
        </article>
      </div>
      <div className='order-1 md:order-2 flex md:block justify-center items-end'>
        <img src={MobileHero} className='block md:hidden' />
        <img src={XlHero} className='hidden md:block' />
      </div>
    </section>
  )
}

export default Hero
