import Image from 'next/image';
import Button from '../UI/GenericButton';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

interface NavProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function Nav({ isMobileMenuOpen, toggleMobileMenu }: NavProps) {
  const { t } = useTranslation();

  return (
    <>
      <header className=' border-b-[3px] justify-between flex border-b-[#2A2A2A]  w-full flex-shrink-0 h-36  shadow-[0_4px_10px_rgba(0,0,0,0.25)]'>
        <div className='logo-cont'>
          <Image
            src={
              i18n.language === 'en' ? '/spain-flag.png' : '/english-flag.png'
            }
            width={25}
            height={25}
            alt='Spanish Flag Icon'
            className='ml-[0.75rem] mt-[0.9375rem] cursor-pointer'
            onClick={() =>
              i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
            }
          />
          <Image
            className='ml-[2.3125rem] cursor-pointer'
            src={'/octavian-logo.png'}
            alt='Logo'
            width={98}
            height={81}
          />
        </div>
        <div className='lg:flex items-center gap-16 text-2xl font-light mr-11 hidden'>
          <a
            href='/'
            className='navbar-text cursor-pointer hover:text-[var(--primary-blue)] transition-all duration-200 ease-in-out'
          >
            {t('about')}
          </a>
          <a className='navbar-text cursor-pointer hover:text-[var(--primary-blue)] transition-all duration-200 ease-in-out'>
            {t('skills')}
          </a>
          <a className='navbar-text cursor-pointer hover:text-[var(--primary-blue)] transition-all duration-200 ease-in-out'>
            {t('projects')}
          </a>
          <a className='navbar-text cursor-pointer hover:text-[var(--primary-blue)] transition-all duration-200 ease-in-out'>
            {t('contact')}
          </a>
          <Button needsFontAdjustment={true} className='font-normal'>
            {t('resume')}
          </Button>
        </div>

        {/* Hamburger icon */}
        <div className='lg:hidden flex items-center mr-4'>
          <button onClick={toggleMobileMenu}>
            <RxHamburgerMenu className='text-[var(--primary-blue)] text-7xl'></RxHamburgerMenu>
          </button>
        </div>

        {/* Hamburger menu links */}

        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? 'fixed' : 'hidden'
          } bg-[var(--primary-gray)] h-full right-0 flex flex-col items-center justify-center w-[30%]`}
        >
          <IoCloseOutline
            onClick={toggleMobileMenu}
            className='fixed top-0 right-0 mt-4 mr-4 text-7xl text-[var(--primary-blue)]'
          />
          <div className='flex flex-col gap-20 text-3xl'>
            <a
              href='/'
              className='block text-center py-4'
              onClick={toggleMobileMenu}
            >
              {t('about')}
            </a>
            <a className='block text-center py-4' onClick={toggleMobileMenu}>
              {t('skills')}
            </a>
            <a className='block text-center py-4' onClick={toggleMobileMenu}>
              {t('projects')}
            </a>
            <a className='block text-center py-4' onClick={toggleMobileMenu}>
              {t('contact')}
            </a>
            <Button needsFontAdjustment={true} size='big'>
              {t('resume')}
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
