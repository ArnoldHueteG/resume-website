import Marquee from 'react-fast-marquee'
import useDarkMode from '../hooks/useDarkMode'
import { useTranslation } from 'react-i18next';
function MarqueeOne() {
  const [isDark] = useDarkMode()
  const { t, i18n } = useTranslation();

  return (
    <Marquee
      className={`${isDark && 'gredient-background-dark'} gredient-background`}
    >
      <div className='flex gap-14 md:gap-20 mx-2'>
        {Array(8)
          .fill('')
          .map((e, i) => (
            <div key={i} className='flex gap-2 py-9 items-center'>
              <p className='text-2xl md:text-4xl font-semibold'>
                {t(`MarqueeOne.question`)}
              </p>
              <button className='bg-white text-[#220F80] font-bold px-4 py-4 text-lg rounded-full'>
              {t(`MarqueeOne.buttonText`)}
              </button>
            </div>
          ))}
      </div>
    </Marquee>
  )
}

export default MarqueeOne
