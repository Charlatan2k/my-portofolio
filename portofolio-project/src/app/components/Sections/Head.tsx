import Button from '../UI/GenericButton';

export default function Head() {
  return (
    <div className='flex flex-grow flex-col items-center'>
      <section className='home-section  items-center h-full w-full flex-col flex'>
        <div className='home-text mt-40  flex flex-col items-center'>
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
            design. Currently, I’m focused on honing my skills and advancing my
            craft.
          </p>
          <Button className='mt-12' size='big'>
            Explore
          </Button>
        </div>
      </section>
    </div>
  );
}
