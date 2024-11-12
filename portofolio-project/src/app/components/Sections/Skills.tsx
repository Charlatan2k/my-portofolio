import Skill from '../UI/Skill';
import { Icon } from '@iconify/react';

export default function Skills() {
  return (
    <section className='skillsSection bg-icons-background bg-no-repeat bg-contain bg-center w-full h-[100vh] flex flex-col justify-start items-center'>
      <div className='border-[3px] pb-40 border-[var(--primary-gray)]'></div>

      <div
        id='skills-title-box'
        className='border-[5px] border-[var(--primary-gray)] rounded-xl h-28 w-72 flex justify-center items-center'
      >
        <h1 className='font-bold text-2xl'>Tech Arsenal</h1>
      </div>

      <div className='border-[3px] border-[var(--primary-gray)] h-24'></div>
      <div
        id='skills-content-box'
        className='border-[5px] border-[var(--primary-gray)] rounded-xl h-[48%] w-[80%] flex justify-center items-center'
      >
        <section className='flex flex-col border-r-[5px] border-[var(--primary-gray)] h-full justify-between w-[90%]'>
          <div className='flex flex-col items-center justify-center h-full'>
            <div className='flex flex-col justify-center items-center'>
              <Icon
                className='border-2 border-[var(--primary-gray)] rounded-lg bg-[var(--primary-gray)] text-[var(--primary-blue)] p-2'
                width={70}
                height={70}
                icon='material-symbols:database'
              />
              <h1 className='font-mono text-2xl tracking-[4px] text-center my-2 border-b-2 h-10 w-36 border-[var(--primary-blue)]'>
                Back
              </h1>
            </div>
            <div className=' w-[80%] h-auto flex gap-6 flex-wrap items-center justify-center mt-6'>
              <Skill name='Node' />
              <Skill name='Express' />
              <Skill name='MySQL' />
              <Skill name='MongoDB' />
              <Skill name='Python' />
              <Skill name='API REST' />
              <Skill name='Amazon Web Service' />
              <Skill name='Fiware' />
            </div>
          </div>
        </section>
        <div className='flex flex-col border-r-[5px] border-[var(--primary-gray)] h-full justify-between w-full'>
          <div className='flex  flex-col items-center justify-center h-full'>
            <div className='flex flex-col justify-center items-center'>
              <Icon
                className='border-2 border-[var(--primary-gray)] rounded-lg bg-[var(--primary-gray)] text-[var(--primary-blue)] p-3'
                width={70}
                height={70}
                icon='bi:front'
              />
              <h1 className='font-mono text-2xl tracking-[4px] text-center my-2 border-b-2 h-10 w-36 border-[var(--primary-blue)]'>
                Front
              </h1>
            </div>
            <div className=' w-[94%] h-auto flex gap-6 flex-wrap items-center justify-center mt-6'>
              <Skill name='HTML' />
              <Skill name='CSS' />
              <Skill name='JavaScript' />
              <Skill name='JQuery' />
              <Skill name='React' />
              <Skill name='Angular' />
              <Skill name='Next' />
              <Skill name='Tailwind CSS' />
              <Skill name='Typescript' />
              <Skill name='Bootstrap' />
            </div>
          </div>
        </div>
        <div className='flex flex-col h-full justify-between w-[90%]'>
          <div className='flex  flex-col items-center justify-center h-full'>
            <div className='flex flex-col justify-center items-center'>
              <Icon
                className='border-2 border-[var(--primary-gray)] rounded-lg bg-[var(--primary-gray)] text-[var(--primary-blue)] p-2'
                width={70}
                height={70}
                icon='clarity:tools-solid'
              />
              <h1 className='font-mono text-2xl tracking-[4px] text-center my-2 border-b-2 h-10 w-36 border-[var(--primary-blue)]'>
                Tools
              </h1>
            </div>
            <div className=' w-[100%] h-auto flex gap-6 flex-wrap items-center justify-center mt-6'>
              <Skill name='GIT' />
              <Skill name='Figma' />
              <Skill name='Docker' />
              <Skill name='Photoshop' />
              <Skill name='Github' />
              <Skill name='Sony Vegas' />
              <Skill name='SCRUM' />
              <Skill name='Premier Pro' />
              <Skill name='DaVinci Resolve' />
            </div>
          </div>
        </div>
      </div>
      <div className='border-[3px] border-[var(--primary-gray)] h-24'></div>
    </section>
  );
}
