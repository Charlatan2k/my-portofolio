import Image from 'next/image';
import Button from '../UI/GenericButton';

export default function Nav() {
  return (
    <>
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
          <a
            href='/'
            className='navbar-text cursor-pointer hover:text-[var(--primary-blue)] transition-all duration-200 ease-in-out'
          >
            About
          </a>
          <a className='navbar-text cursor-pointer hover:text-[var(--primary-blue)] transition-all duration-200 ease-in-out'>
            Skills
          </a>
          <a className='navbar-text cursor-pointer hover:text-[var(--primary-blue)] transition-all duration-200 ease-in-out'>
            Projects
          </a>
          <a className='navbar-text cursor-pointer hover:text-[var(--primary-blue)] transition-all duration-200 ease-in-out'>
            Contact
          </a>
          <Button>Resume</Button>
        </div>
      </header>
    </>
  );
}
