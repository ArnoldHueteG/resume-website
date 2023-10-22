import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useSpring, animated } from 'react-spring'
import { projects as projectList } from '../data/projects'

function RecentProjects() {
  const [currentTab, setCurrentTab] = useState(0)
  const isNextSlideExist = currentTab < projectList.length - 1
  const isPrevSlideExist = currentTab > 0

  const props = useSpring({
    opacity: 1,
    transform: `translateX(0}%)`,
    from: { opacity: 0, transform: 'translateX(300%)' },
    reset: true,
    onRest: () => {}, // No automatic transition, onRest is empty
  })

  return (
    <div className='dark:bg-darkSecondary py-24' id='proyectos'>
      <section className='px-3 max-w-6xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-[35px] md:text-[42px] font-semibold'>
            <span className='text-[#694DF9] dark:text-[#b5a7ff]'>
              Proyectos
            </span>{' '}
            Recientes
          </h2>
          <p className='text-base max-w-sm w-full mx-auto mt-2 mb-8 text-[#0A0A0A] dark:text-gray-300'>
            Consulte las implementaciones recientes y los diseños de alto nivel
          </p>
        </div>
        <animated.div style={props}>
          <div className='grid gap-2 grid-cols-1 md:grid-cols-2'>
            <div>
              <img src={projectList[currentTab].imageUrl} alt='' />
            </div>
            <div className='space-y-4'>
              <h2 className='text-[27px] md:text-[32px] font-semibold'>
                {projectList[currentTab].title}
              </h2>
              <p className='dark:text-gray-400'>
                {projectList[currentTab].description}
              </p>
              <p className='text-xl text-[#757575] dark:text-gray-300'>
                Cliente: {projectList[currentTab].client}
              </p>
              <button className='btn-primary'>¡Conversemos!</button>
            </div>
          </div>
        </animated.div>
        <div className='flex justify-end'>
          <div className='flex gap-3'>
            <button
              onClick={() =>
                isPrevSlideExist && setCurrentTab((prev) => prev - 1)
              }
              className={`border-2 rounded-full p-3 ${
                isPrevSlideExist
                  ? 'text-black border-gray-800 dark:border-gray-300 dark:text-white'
                  : 'text-gray-400 border-gray-400 cursor-not-allowed'
              }`}
            >
              <AiOutlineArrowLeft className='w-5 h-auto' />
            </button>
            <button
              className={`border-2 rounded-full p-3 ${
                isNextSlideExist
                  ? 'text-black border-gray-800 dark:border-gray-300 dark:text-white'
                  : 'text-gray-400 border-gray-400 cursor-not-allowed'
              }`}
              onClick={() =>
                isNextSlideExist && setCurrentTab((prev) => prev + 1)
              }
            >
              <AiOutlineArrowRight className='w-5 h-auto' />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecentProjects
