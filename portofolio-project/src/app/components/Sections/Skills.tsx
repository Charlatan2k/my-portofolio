import Skill from '../UI/Skill';

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
        className='border-[5px] border-[var(--primary-gray)] rounded-xl h-[40%] w-[70%] flex justify-center items-center'
      >
        <div className='flex flex-col border-r-[5px] border-[var(--primary-gray)] h-full justify-between w-full'></div>
        <div className='flex flex-col border-r-[5px] border-[var(--primary-gray)] h-full justify-between w-full'></div>
        <div className='flex flex-col h-full justify-between w-full'></div>
      </div>
      <div className='border-[3px] border-[var(--primary-gray)] h-24'></div>
    </section>
  );
}
