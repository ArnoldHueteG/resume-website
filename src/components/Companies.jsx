import Marquee from 'react-fast-marquee'
import logo1 from './../assets/company/logo1.png'
import logo2 from './../assets/company/logo2.png'
import logo3 from './../assets/company/logo3.png'
import logo4 from './../assets/company/logo4.png'
import logo5 from './../assets/company/logo5.png'
import logo6 from './../assets/company/logo6.png'
import logo7 from './../assets/company/logo7.png'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

function Companies() {
  const { t, i18n } = useTranslation()
  return (
    <div className='dark:bg-darkSecondary'>
      <div className='max-w-6xl mx-auto px-4 py-14'>
        <h2 className='text-2xl md:text-4xl text-center font-semibold dark:text-gray-300'>
          {/* <span className='text-[#694DF9]'>Experiencia </span>
          profesional con destacadas empresas */}
          {t('companiesSection.title')
              .split(' ')
              .map((word, index) => (
                index === 0
                  ? <span key={uuidv4()} className="text-[#694DF9] dark:text-[#b5a7ff]">{word}</span>
                  : <span key={uuidv4()}>{' ' + word}</span>
              ))
            }
        </h2>
        <div className='flex flex-wrap mt-14 justify-center gap-6'>
          <img src={logo1} className='dark:filter dark:invert' />
          <img src={logo2} className='dark:filter dark:invert' />
          <img src={logo3} className='dark:filter dark:invert' />
          <img src={logo4} />
          <img src={logo5} />
          <img src={logo6} />
          <img src={logo7} />
        </div>
      </div>
    </div>
  )
}

export default Companies
