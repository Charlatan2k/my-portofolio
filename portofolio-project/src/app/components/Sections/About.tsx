import Image from 'next/image';
import CircularProgressBar from '../UI/CircleProgressBar';

export default function About() {
  return (
    <div className='flex  mt-[357px] w-full flex-col justify-center items-center'>
      <section
        id='#about'
        className='border-[5px] flex flex-col items-center rounded-xl border-[var(--primary-gray)] w-[80%] h-[977px] mb-36'
      >
        <header className='titles-div justify-center items-center flex gap-6 mt-44'>
          <hr className='border-[2px] border-[var(--primary-gray)] w-36' />
          <h1 className='font-bold text-5xl'>Behind the screen</h1>
          <hr className='border-[2px] border-[var(--primary-gray)] w-[804px]' />
        </header>

        <article className='content-container flex flex-col mt-24'>
          <h2 className='text-3xl font-medium '>
            The Story Behind the Developer
          </h2>
          <div className='content-duo gap-52 flex'>
            <section className='text-container flex flex-col items-center  w-[631px] relative'>
              <article className='flex flex-col p-8 border-l-4 border-t-4 border-[var(--primary-blue)] rounded-md'>
                <p className='font-light text-xl'>
                  Hello! My name is Octavian, and I’ve always been passionate
                  about creating and exploring on the internet. My web
                  development journey began when I first discovered{' '}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    JavaScript
                  </span>{' '}
                  while writing scripts for Discord. From there, I dived into
                  <span className='font-bold text-[var(--primary-blue)]'>
                    HTML
                  </span>{' '}
                  and{' '}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    CSS
                  </span>
                  , and my love for coding grew quickly.
                  <br />
                  <br />
                  Outside of web development, I’m a huge tech enthusiast. I’ve
                  been
                  <span className='font-bold text-[var(--primary-blue)]'>
                    building custom PCs
                  </span>{' '}
                  since I was 13, and I also love
                  <span className='font-bold text-[var(--primary-blue)]'>
                    video games
                  </span>{' '}
                  and{' '}
                  <span className='font-bold text-[var(--primary-blue)]'>
                    photography
                  </span>
                  . Right now, my main focus is improving myself—getting 1%
                  better every day.
                </p>
              </article>
            </section>
            <figure className='image-container relative inline-block z-0'>
              <div className='absolute top-[-18px] left-6 w-full h-full border-[5px] border-[var(--primary-blue)] rounded-lg z-[-1]'></div>
              <Image
                src={'/beach_foto.jpg'}
                width={400}
                height={400}
                alt='About me Photo'
                className='rounded-lg border-[5px] border-[var(--primary-blue)] z-[9999]'
              />
            </figure>
          </div>
          <section className=' flex items-center justify-between mt-16 h-28'>
            <CircularProgressBar percentage={85} text='Coding' />
            <CircularProgressBar percentage={75} text='Fitness' />
            <CircularProgressBar percentage={55} text='Photography' />
          </section>
        </article>
      </section>
    </div>
  );
}
