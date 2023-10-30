import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
function Technologies() {
  const technologies = [
    { name: 'Google Cloud', icon: 'assets/tech/gcloud.png'},
    { name: 'Microsoft Azure', icon: 'assets/tech/azure.png'},
    { name: 'AWS', icon: 'assets/tech/aws.png'},
    { name: 'Databricks', icon: 'assets/tech/databricks.png'},
    { name: 'Snowflake', icon: 'assets/tech/snowflake.png'},

    { name: 'Python', icon: 'assets/tech/python.png'},
    { name: 'SQL Server', icon: 'assets/tech/sql.png'},
    { name: 'Postgres', icon: 'assets/tech/postgres.png'},
    { name: 'Kubernetes', icon: 'assets/tech/kubernetes.png'},
    { name: 'React', icon: 'assets/tech/react.png'},
    { name: 'Node.js', icon: 'assets/tech/node.png'},
    { name: 'Typescript', icon: 'assets/tech/typescript.png'},
    
  ];
  const { t, i18n } = useTranslation();

  return (
    <div className='dark:bg-darkSecondary py-10' id='skills'>
      <section className='px-3 max-w-6xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-[35px] md:text-[42px] font-semibold'>
            {/* <span className='text-[#694DF9] dark:text-[#b5a7ff]'>
              {t(`SkillsSection.title`)}
            </span>{' '} */}
            {t('SkillsSection.title')
              .split(' ')
              .map((word, index) => (
                index === 0
                  ? <span key={uuidv4()} className="text-[#694DF9] dark:text-[#b5a7ff]">{word}</span>
                  : <span key={uuidv4()}>{' ' + word}</span>
              ))
            }
          </h2>
          <p className='text-base max-w-sm w-full mx-auto mt-2 mb-8 text-[#0A0A0A] dark:text-gray-300'>
            {t(`SkillsSection.subtitle`)}
          </p>
        </div>
        <div className='flex flex-wrap gap-8 md:gap-8 w-full justify-center'>
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <img src={ "src/" +tech.icon} alt={tech.name} title={tech.description} className="h-24 object-contain"/>
              <p className='text-center font-semibold mt-2'>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Technologies