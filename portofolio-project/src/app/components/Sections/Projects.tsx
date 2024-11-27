export default function Projects() {
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
          <div className='projects w-full h-full flex gap-20 justify-center items-center'>
            <div className='projects-h h-[80%] w-[40%]  flex flex-col items-center justify-center gap-32 ml-20'>
              <div className='project-bugatti bg-[var(--primary-blue)] rounded-xl w-full h-[40%]'>
                <div
                  className='bg-project1 w-full h-full rounded-xl bg-contain bg-center bg-no-repeat opacity-50 '
                  style={{ backgroundSize: '100% 100%' }}
                ></div>
              </div>
              <div className='incoming-project bg-[#9ebbb7] rounded-xl w-full h-[40%] flex items-center justify-center'>
                <h1 className='text-[var(--background)] text-3xl font-extrabold font-sf-mono'>
                  Incoming Project
                </h1>
              </div>
            </div>
            <div className='project-v flex justify-center items-center h-full w-[38%] mr-20'>
              <div className='projects-mobile rounded-xl bg-[var(--primary-blue)] w-full h-[80%] '>
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
    </section>
  );
}
