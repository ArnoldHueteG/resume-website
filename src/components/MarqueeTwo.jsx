import Marquee from 'react-fast-marquee'
function MarqueeOne() {
  return (
    <Marquee className='gredient-background'>
      <div className='flex gap-14 md:gap-20 mx-2'>
        {Array(8)
          .fill('')
          .map((e, i) => (
            <div key={i} className='flex gap-2 py-9 items-center'>
              <p className='text-2xl md:text-4xl font-semibold'>
                ¿Tienes alguna consulta?
              </p>
              <button className='bg-white text-[#220F80] font-bold px-4 py-4 text-lg rounded-full'>
                ¡Conversemos!
              </button>
            </div>
          ))}
      </div>
    </Marquee>
  )
}

export default MarqueeOne
