import Button from '../UI/GenericButton';

export default function Contact() {
  return (
    <>
      <section className='flex flex-col h-[80vh] items-center'>
        <div className='border-[3px] border-[var(--primary-gray)] h-44 w-[1px]'></div>
        <div className='flex flex-col justify-center items-center text-center border-[5px] border-[var(--primary-gray)] rounded-xl h-[50%] w-[50%]'>
          <h1 className='font-extrabold text-6xl border-b-2 border-[var(--primary-gray)] pb-4 w-[70%]'>
            Contact Me
          </h1>
          <p className='font-normal w-[58%] text-l mt-6 mb-8'>
            I&apos;m always on the lookout for exciting new challenges, and my
            inbox is open! Whether you have a question or just want to connect,
            I&apos;ll do my best to respond as soon as I can.
          </p>
          <Button
            onClick={() =>
              (window.location.href =
                'mailto:octavianmihai.calin@gmail.com?subject=Contact&body=Hi, I would like to get in touch')
            }
            size='big'
          >
            Contact
          </Button>
        </div>
      </section>
      <p className='text-center font-sf-mono'>
        Designed & Built by Octavian Mihai Calin
      </p>
    </>
  );
}
