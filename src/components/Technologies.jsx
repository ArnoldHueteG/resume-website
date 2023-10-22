import aws from './../assets/tech/aws.png'
import azure from './../assets/tech/azure.png'
import gcloud from './../assets/tech/gcloud.png'
import python from './../assets/tech/python.png'
import sql from './../assets/tech/sql.png'

function Technologies() {
  return (
    <div className='dark:bg-darkSecondary py-14' id='technologies'>
      <section className='px-3 max-w-6xl py-14 mx-auto'>
        <div className='text-center'>
          <h2 className='text-[35px] md:text-[42px] font-semibold'>
            <span className='text-[#694DF9] dark:text-[#b5a7ff]'>
              Tecnologías
            </span>{' '}
            aplicadas
          </h2>
          <p className='text-base max-w-sm w-full mx-auto mt-2 mb-8 text-[#0A0A0A] dark:text-gray-300'>
            Manejo y me actualizo en tecnologías de vanguardia para ofrecer el
            mejor servicio
          </p>
        </div>
        <div className='flex flex-wrap gap-8 md:gap-24 w-full justify-center'>
          <div>
            <img src={gcloud} />
            <p className='text-center font-semibold mt-2'>Google Cloud</p>
          </div>
          <div>
            <img src={azure} />
            <p className='text-center font-semibold mt-2'>Microsoft Azure</p>
          </div>
          <div>
            <img src={aws} />
            <p className='text-center font-semibold mt-2'>AWS</p>
          </div>
          <div>
            <img src={python} />
            <p className='text-center font-semibold mt-2'>Python</p>
          </div>
          <div>
            <img src={sql} />
            <p className='text-center font-semibold mt-2'>SQL Server</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technologies
