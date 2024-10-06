import Image from 'next/image';
import Button from './components/UI/GenericButton';
import SideElement from './components/UI/SideElementLine';

export default function Home() {
  return (
    <div className='h-screen'>
      <header className='border-b-[3px] justify-between flex border-b-[#2A2A2A] h-36 shadow-[0_4px_10px_rgba(0,0,0,0.25)]'>
        <SideElement orientation='left' />
        <div className='logo-cont'>
          <Image
            src={'/spain-flag.png'}
            width={25}
            height={25}
            alt='Spanish Flag Icon'
            className='ml-[0.75rem] mt-[0.9375rem]'
          />
          <Image
            className='ml-[2.3125rem]'
            src={'/octavian-logo.png'}
            alt='Logo'
            width={98}
            height={81}
          />
        </div>
        <div className='flex items-center gap-16 text-2xl font-light mr-11'>
          <h4 className='navbar-text'>About</h4>
          <h4 className='navbar-text'>Skills</h4>
          <h4 className='navbar-text'>Projects</h4>
          <h4 className='navbar-text'>Contact</h4>
          <Button children='Resume' />
        </div>
      </header>
    </div>
  );
}
