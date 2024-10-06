import Image from 'next/image';
import Button from './components/UI/GenericButton';
import Social from './components/UI/socialElement';
import Loader from './components/UI/Loader';

export default function Home() {
  return (
    <div className=' flex flex-col'>
      <Loader />
      <header className='border-b-[3px] justify-between flex border-b-[#2A2A2A] h-36 shadow-[0_4px_10px_rgba(0,0,0,0.25)]'>
        <div className='logo-cont'>
          <Image
            src={'/spain-flag.png'}
            width={25}
            height={25}
            alt='Spanish Flag Icon'
            className='ml-[0.75rem] mt-[0.9375rem] cursor-pointer'
          />
          <Image
            className='ml-[2.3125rem] cursor-pointer'
            src={'/octavian-logo.png'}
            alt='Logo'
            width={98}
            height={81}
          />
        </div>
        <div className='flex items-center gap-16 text-2xl font-light mr-11'>
          <a href='/' className='navbar-text cursor-pointer'>
            About
          </a>
          <a className='navbar-text cursor-pointer'>Skills</a>
          <a className='navbar-text cursor-pointer'>Projects</a>
          <a className='navbar-text cursor-pointer'>Contact</a>
          <Button>Resume</Button>
        </div>
      </header>
      <Social />
      <main className='flex flex-grow flex-col items-center'>
        <section className='home-section border-2 border-blue-500 items-center h-full w-full flex-col flex'>
          <div className='home-text mt-40 border-2 border-blue-500 flex flex-col items-center'>
            <h6 className='font-sf-mono font-medium mb-12 text-3xl text-[var(--primary-blue)]'>
              Welcome, my name is
            </h6>
            <div className='flex flex-col items-center'>
              <h1 className='text-5xl font-bold'>Octavian Mihai Calin</h1>
              <h2 className='text-4xl font-bold opacity-75'>
                Crafting stories through code
              </h2>
            </div>
            <p className='text-xl font-bold opacity-75 w-[863px] text-center mt-7'>
              I’m a Full Stack web developer passionate about crafting engaging
              digital experiences, blending front-end, back-end development, and
              design. Currently, I’m focused on honing my skills and advancing
              my craft.
            </p>
            <Button className='mt-12' size='big'>
              Explore
            </Button>
          </div>
        </section>

        <section className='h-screen border-2 border-green-500 w-full mt-85'></section>
      </main>
    </div>
  );
}
