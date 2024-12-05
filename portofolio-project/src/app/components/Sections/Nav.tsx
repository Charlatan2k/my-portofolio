import Image from 'next/image';
import Button from '../UI/GenericButton';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

export default function Nav() {
  const { t } = useTranslation();

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
        <div className='flex items-center gap-16 text-2xl font-light mr-11'>
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
      </header>
    </>
  );
}
