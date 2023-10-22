import ServiceOne from './../assets/service-1.png'
import ServiceTwo from './../assets/service-2.png'
import ServiceThree from './../assets/service-3.png'

function Services() {
  const serviceList = [
    {
      title: 'Asesoría tecnológica',
      img: ServiceTwo,
      text: 'Transforma tu negocio con asesoría digital experta en datos, desarrollo y más y alcanza el éxito en línea.',
    },
    {
      title: 'Desarrollo de productos',
      img: ServiceThree,
      text: 'Convierte tus ideas en productos digitales exitosos con el servicio de desarrollo de vanguardia que tenemos para ti.',
    },
    {
      title: 'Coaching a equipos',
      img: ServiceOne,
      text: 'Optimiza el rendimiento de tu equipo con nuestro poderoso servicio de coaching, en donde optimizaremos el proceso de trabajo.',
    },
  ]
  return (
    <section id='service' className='py-24'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col items-center md:flex-row md:justify-between px-4'>
          <h2 className='text-3xl font-semibold mb-3 text-white'>
            Mis servicios
          </h2>
          <div className='max-w-md w-full text-center md:text-right text-[#F7F5FF]'>
            Descubre cómo mis servicios pueden impulsar tu éxito en el mundo
            digital.
          </div>
        </div>
        <div className='overflow-auto no-scrollbar text-[#F7F5FF]'>
          <div className='flex py-10 gap-4 pl-3'>
            {serviceList.map((service, i) => {
              return (
                <div
                  key={i}
                  className='w-4/6 md:w-full bg-white rounded-3xl text-gray-800 px-3 pt-2 pb-4 shrink-0 md:shrink dark:bg-neutral'
                >
                  <img
                    src={service.img}
                    alt=''
                    className='w-full h-auto mt-1 mb-3'
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
