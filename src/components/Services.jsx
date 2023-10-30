import ServiceOne from './../assets/images.jpeg'
import ServiceTwo from './../assets/service-2.png'
import ServiceThree from './../assets/service-3.png'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

function Services() {
  const [serviceList, setserviceList] = useState([
    {
      title: 'Data Solutions',
      img: ServiceTwo,
      text: 'Build a comprehensive data platform tailored to your company\'s needs, empowering you to make informed, data-driven decisions.',
    },
    {
      title: 'Cloud Migration',
      img: ServiceOne,
      text: 'Seamlessly transition your infrastructure to the cloud with our dedicated migration services, designed for your convenience and security.',
    },
    {
      title: 'Digital Product Development',
      img: ServiceThree,
      text: 'Transform your concepts into successful digital products with our cutting-edge development services, ensuring your innovation stands out.',
    },
  ]
  )
  const { t, i18n } = useTranslation();
  for (let i = 0; i < serviceList.length; i++) {
    const service = serviceList[i];
    service.title = t(`ServiceList.${i}.title`);
    service.text = t(`ServiceList.${i}.description`);
  }
  // setserviceList( serviceList.map((service, index) => ({
  //   ...service,
  //   title: t(`Services.${index}.title`),
  //   text: t(`Services.${index}.text`),
  // }))
  // );

  return (
    <section id='services' className='py-10'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col items-center md:flex-row md:justify-between px-4'>
          <h2 className='text-3xl font-semibold mb-3 text-white'>
            {t(`ServiceSection.title`)}
          </h2>
          <div className='max-w-md w-full text-center md:text-right text-[#F7F5FF]'>
            {t(`ServiceSection.subtitle`)}
          </div>
        </div>
        <div className='overflow-auto no-scrollbar text-[#F7F5FF]'>
          <div className='flex pt-10 gap-4 pl-3'>
            {serviceList.map((service, i) => {
              return (
                <div
                  key={i}
                  className='w-4/6 md:w-full bg-white rounded-3xl text-gray-800 px-3 pt-2 pb-4 shrink-0 md:shrink dark:bg-neutral'
                >
                  <img
                    src={service.img}
                    alt=''
                    className='w-full h-36 mt-1 mb-3 rounded-lg'
                  />
                  <h2 className='text-xl md:text-2xl font-bold my-4 dark:text-gray-300'>
                    {service.title}
                  </h2>
                  <p className='text-[#0A0A0A] leading-[1.2] dark:text-gray-400'>
                    {service.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
