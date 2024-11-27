import { useState } from 'react';
import Skill from '../UI/Skill';

export default function Projects() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (project) => setOpenModal(project);
  const handleCloseModal = () => setOpenModal(null);
  return (
    <section className='flex flex-col items-center'>
      <div className='border-[3px] w-0 border-[var(--primary-gray)] h-32'></div>
      <article className='flex flex-col w-full h-[105vh] items-center'>
        <section className='w-[70%] h-full flex flex-col border-[5px] border-[var(--primary-gray)] rounded-xl justify-center items-center'>
          <div className='title-container flex flex-col justify-center items-center mt-10'>
            <h1 className='text-6xl font-extrabold border-b-2 w-[550px] border-[var(--primary-gray)] text-center'>
              Showcase
            </h1>
            <p className='text-xl mt-2'>
              Click each project to see more info about it
            </p>
          </div>
          <div className='projects w-full  h-full flex gap-20 justify-center items-center'>
            <div className='projects-h h-[80%] w-[40%]  flex flex-col items-center justify-center gap-32 ml-20'>
              <div
                className='project-bugatti hover:bg-transparent transition-all bg-[var(--primary-blue)] rounded-xl w-full h-[40%]'
                onClick={() => handleOpenModal('bugatti')}
              >
                <div
                  className='bg-project1  cursor-pointer w-full h-full rounded-xl bg-contain bg-center bg-no-repeat opacity-50 '
                  style={{ backgroundSize: '100% 100%' }}
                ></div>
              </div>
              <div className='incoming-project  cursor-pointer bg-[#9ebbb7] rounded-xl w-full h-[40%] flex items-center justify-center'>
                <h1 className='text-[var(--background)] text-3xl font-extrabold font-sf-mono'>
                  Incoming Project
                </h1>
              </div>
            </div>
            <div className='project-v cursor-pointer  flex justify-center items-center h-full w-[38%] mr-20'>
              <div
                onClick={() => handleOpenModal('hirun')}
                className='projects-mobile hover:bg-transparent transition-all rounded-xl bg-[var(--primary-blue)] w-full h-[80%] '
              >
                <div
                  className='project-hirun w-full h-full rounded-xl bg-contain bg-center bg-no-repeat opacity-50'
                  style={{ backgroundSize: '100% 100%' }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <div className='border-[3px] w-0 border-[var(--primary-gray)] h-48'></div>
      </article>

      {/* Modals */}
      {openModal === 'bugatti' && (
        <div
          className='modal bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center'
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div className='bg-[var(--background)] p-6 rounded-xl shadow-lg h-[70%] w-[70%]'>
            <div className=' container w-full h-full flex items-center justify-center gap-40 border-[5px] rounded-lg border-[var(--primary-gray)]'>
              <div
                className='thumbnail project-bugatti-modal ml-10 border-[5px] border-[var(--primary-gray)] w-[50%] h-[45%] bg-cover bg-center bg-no-repeat'
                style={{ backgroundSize: '100% 100%' }}
              ></div>
              <div className='content mr-10 flex flex-col '>
                <h1 className='text-7xl font-bold mb-4 pb-4 border-b-2 border-[var(--primary-gray)]'>
                  Bugatti
                </h1>
                <p className='w-96 border-b-2 pb-4 border-[var(--primary-gray)]'>
                  The Bugatti Chiron Super Sport 57 One of One showcase
                  highlights the car’s unique design and powerful W16 engine.
                  This exclusive website dives into its custom features,
                  exceptional performance, and luxury, offering a closer look at
                  what makes this Bugatti truly one of a kind.
                </p>
                <div className='stack flex w-[28rem] gap-4 pt-4 pb-4 flex-wrap border-b-2 border-[var(--primary-gray)]'>
                  <Skill name='React' />
                  <Skill name='Javascript' />
                  <Skill name='Typescript' />
                  <Skill name='Tailwind' />
                  <Skill name='Next' />
                  <Skill name='Figma' />
                  <Skill name='Git' />
                </div>
                <a
                  href='https://charlatan2k.github.io/Bugatti-Chiron-57/'
                  className='flex self-center'
                >
                  <button className='mt-4 px-14 py-2 text-xl font-sf-mono bg-transparent border-2 border-[var(--primary-blue)] self-center text-white rounded hover:bg-[var(--primary-gray)] hover:transition-all'>
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {openModal === 'hirun' && (
        <div
          className='modal bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center'
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div className='bg-[var(--background)] p-6 rounded-xl shadow-lg h-[70%] w-[70%]'>
            <div className=' container w-full h-full flex items-center justify-center gap-40 border-[5px] rounded-lg border-[var(--primary-gray)]'>
              <div className='thumbnail project-hirun-modal ml-10 border-2 w-[50%] h-[65%] bg-cover bg-center bg-no-repeat'></div>
              <div className='content mr-10 flex flex-col '>
                <h1 className='text-7xl font-bold mb-4 border-b-2 border-[var(--primary-gray)]'>
                  Hirun
                </h1>
                <p className='w-96 border-b-2 pb-4 border-[var(--primary-gray)]'>
                  HiRun is a web application for mobile devices, designed for
                  professionals looking to offer their services to clients, and
                  where users can hire those services, publish your own, or even
                  discover new opportunities to collaborate and Expand your
                  network of contacts.
                </p>
                <div className='stack flex w-[28rem] gap-4 pt-4 pb-4 flex-wrap border-b-2 border-[var(--primary-gray)]'>
                  <Skill name='Angular' />
                  <Skill name='Javascript' />
                  <Skill name='Typescript' />
                  <Skill name='CSS' />
                  <Skill name='Express' />
                  <Skill name='Bootstrap' />
                  <Skill name='MySQL' />
                  <Skill name='AWS' />
                  <Skill name='Git' />
                  <Skill name='Github' />
                </div>
                <a
                  href='https://hi-run.vercel.app/'
                  className='flex self-center'
                >
                  <button className='mt-4 px-14 py-2 text-xl font-sf-mono bg-transparent border-2 border-[var(--primary-blue)] self-center text-white rounded hover:bg-[var(--primary-gray)] hover:transition-all'>
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
