import { useState } from 'react'
// import Arnold from './assets/arnold.png'
// import MobileHero from './assets/MobileHero.png'
import { certification } from './../data/certification'
import { recognition } from './../data/recognition'
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
function Resume() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <h2 className='text-4xl font-semibold mb-5'>
          {/* <span className='text-[#5E47D2]'>¡Hola!,</span> soy Arnold */}
          {t('AboutMeSection.resume.title')
              .split(' ')
              .map((word, index) => (
                index === 0
                  ? <span key={uuidv4()} className="text-[#5E47D2]">{word}</span>
                  : <span key={uuidv4()}>{' ' + word}</span>
              ))
            }
        </h2>
        <p className='pt-4'>
          {t('AboutMeSection.resume.description')}
        </p>
        <div className='flex flex-col md:flex-row gap-3 pt-8'>
          <button className='btn-primary w-full md:w-auto'>
            {t('AboutMeSection.resume.button1Text')}
          </button>
          <button className='btn-secondary w-full md:w-auto hover:bg-slate-200'>
          {t('AboutMeSection.resume.button2Text')}
          </button>
        </div>
      </div>
    </>
  )
}

function Certification() {
  return (
    <>
      <div className='p-4 w-full grid grid-cols-2 gap-2 max-w-md'>
        {certification.map((e, i) => {
          return (
            <div
              key={i}
              className='p-2 border border-gray-200 dark:border-gray-500 rounded-md shadow-sm w-full h-full'
            >
              <a
                href={e.credential}
                className='block w-full h-full py-2 rounded-md'
                target='_blank'
                rel='noreferrer'
              >
                <p className='text-[15px] text-gray-800 dark:text-gray-300'>
                  {e.name}
                </p>
                <p className='text-sm text-gray-400 dark:text-gray-400 mt-3'>
                  {e.date}
                </p>
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}

function Recognition() {
  const recognition = [
    {
      title: '1er puesto Hackaton Rimac 2022',
      desc: 'Ganador de la competencia junto a dos colegas, y reconocido como el mejor Machine Learning Engineer del evento.',
      link: 'https://www.rimac.com/hackathon-2022/',
    },
  ]
  const { t, i18n } = useTranslation();
  const recognitionList = t('AboutMeSection.recognition.recognitionList', { returnObjects: true });
  recognitionList[0].link = 'https://www.rimac.com/hackathon-2022/';
  return (
    <>
      <div className='p-4'>
        {recognitionList.map((e, i) => {
          return (
            <a
              href={e.link} target='_blank' rel='noreferrer'
              className='block border border-gray-200 dark:border-gray-500 p-4 rounded-xl shadow'
              key={i}
            >
              <div>
                <p className='text-xl mb-3 font-semibold'>{e.title}</p>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  {e.description}
                </p>
              </div>
            </a>
          )
        })}
      </div>
    </>
  )
}
export default function AboutMe() {
  const [currentTab, setCurrentTab] = useState(0)
  const { t, i18n } = useTranslation();
  const Arnold = '/assets/arnold.png'
  const MobileHero = '/assets/MobileHero.png'
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 mx-auto px-4 max-w-7xl pt-10 gap-3' id="aboutme">
      <div className='h-full'>
        <h2 className='text-3xl font-semibold text-center py-4 md:text-left'>
          {t('AboutMeSection.title')}
        </h2>
        <div className='flex justify-center mt-5'>
          <img className='hidden md:block' src={Arnold} alt='' />
          <img className='md:hidden block' src={MobileHero} alt='' />
        </div>
      </div>

      <div className='py-6'>
        <div className='flex gap-3 md:gap-5 '>
          <button
            className={`text-base md:text-xl font-semibold  ${
              currentTab === 0
                ? 'border-b-[4px] border-[#220F80] text-[#220F80] dark:border-[#765ef1] dark:text-gray-200'
                : 'text-[#5E6488] dark:text-gray-400'
            }`}
            onClick={() => setCurrentTab(0)}
          >
            {t('AboutMeSection.resume.tabName')}
          </button>
          <button
            className={`text-base md:text-xl font-semibold  ${
              currentTab === 1
                ? 'border-b-[4px] border-[#220F80] text-[#220F80] dark:border-[#765ef1] dark:text-gray-200'
                : 'text-[#5E6488] dark:text-gray-400'
            }`}
            onClick={() => setCurrentTab(1)}
          >
            {t('AboutMeSection.certifications.tabName')}
          </button>
          <button
            className={`text-base md:text-xl font-semibold  ${
              currentTab === 2
                ? 'border-b-[4px] border-[#220F80] text-[#220F80] dark:border-[#765ef1] dark:text-gray-200'
                : 'text-[#5E6488] dark:text-gray-400'
            }`}
            onClick={() => setCurrentTab(2)}
          >
            {t('AboutMeSection.recognition.tabName')}
          </button>
        </div>
        <div className='flex items-start mt-10 h-full pt-0 pb-6 md:pb-12 w-full'>
          {currentTab === 0 && <Resume />}
          {currentTab === 1 && <Certification />}
          {currentTab === 2 && <Recognition />}
        </div>
      </div>
    </section>
  )
}
