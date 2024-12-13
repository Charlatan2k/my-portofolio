import Image from 'next/image';
import CircularProgressBar from '../UI/CircleProgressBar';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className='flex  mt-[20%] w-full flex-col justify-center items-center'>
      <section
        id='#about'
        className='border-[5px] flex flex-col items-center rounded-xl border-[var(--primary-gray)] w-[80%] h-[70%] pb-36'
      >
        <header className='titles-div justify-center items-center flex gap-6 w-full mt-44'>
          <hr className='border-[2px] border-[var(--primary-gray)] w-[50%] xl:w-[8%]' />
          <h1 className='font-bold sm:text-3xl xl:text-center text-center  lg:text-5xl'>
            {t('about_title')}
          </h1>
          <hr className='border-[2px] border-[var(--primary-gray)] w-[50%] xl:w-[60%]' />
        </header>

        <article className='content-container flex flex-col xl:mt-24 mt-10 '>
          <div className='content-duo xl:gap-[10%] gap-14 justify-center flex-col xl:flex-row items-center flex'>
            <section className='text-container  flex flex-col items-center justify-center w-[42vw] relative'>
              <h2 className='3xl:text-3xl lg:text-2xl text-left w-full  font-medium '>
                {t('about_second_title')}
              </h2>
              <article className='flex flex-col xl:border-b-0 xl:border-r-0 xl:w-auto w-[180%] border-b-4 border-r-4  p-8 border-l-4 border-t-4 border-[var(--primary-blue)] rounded-md'>
                <p className=' xl:text-[1.05rem] lg:text-[1.2rem] xl:font-medium  3xl:text-xl'>
                  {t('description1')}{' '}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    JavaScript
                  </span>{' '}
                  {t('description2')}{' '}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    HTML
                  </span>{' '}
                  {t('description3')}{' '}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    CSS
                  </span>
                  {t('description4')}
                  <br />
                  <br />
                  {t('description5')}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    {' '}
                    {t('description6')}
                  </span>{' '}
                  {t('description7')}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    {' '}
                    {t('description8')}
                  </span>{' '}
                  {t('description9')}{' '}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    {t('description10')}
                  </span>
                  {t('description11')}
                </p>
              </article>
            </section>
            <div className='4xl:h-[60%] 4xl:w-[40%] 3xl:h-[50%] 3xl:w-[40%] xl:h-[40%] xl:w[30%] lg:h-[40%] lg:w-[80%] md:h-[45%] md:w-[85%] mr-[-10%] '>
              <figure className='image-container  relative  '>
                <div className='relative '>
                  <div className='absolute top-[-18px] left-6 h-full 3xl:w-full 2xl:w-[73%] xl:w-[73%] lg:w-[100%] md:w-[100%] sm:w-[70%] border-[5px] border-[var(--primary-blue)] rounded-lg z-[-1]'></div>
                  <Image
                    src={'/beach_foto.jpg'}
                    width={400}
                    height={400}
                    alt='About me Photo'
                    className='rounded-lg border-[5px] 3xl:w-full 3xl:h-full xl:w-[70%] xl:h-[70%] lg:h-[70%] lg:w-[100%] md:h-[100%] md:w-[150%]  sm:h-[100%] sm:w-[70%]  border-[var(--primary-blue)] z-[9999] '
                  />
                </div>
              </figure>
            </div>
          </div>
          <section className=' flex items-center xl:justify-between lg:justify-between justify-evenly  2xl:mt-12 mt-20  2xl:mb-[0%] mb-[-5%] 2xl:h-24 h-12 w-full '>
            <CircularProgressBar percentage={85} text={t('progressCircle1')} />
            <CircularProgressBar percentage={75} text='Fitness' />
            <CircularProgressBar percentage={55} text={t('progressCircle3')} />
          </section>
        </article>
      </section>
      <div className='border-[3px] border-[var(--primary-gray)] h-40'></div>
    </div>
  );
}
