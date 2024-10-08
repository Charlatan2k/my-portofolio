interface skillProps {
  name: string;
}

const Skill = ({ name }: skillProps) => {
  return (
    <div className='bg-[var(--primary-gray)] text-[var(--primary-blue)] font-medium font-sf-mono px-5 py-2 rounded-xl flex text-center'>
      <p className='text-base'>{name}</p>
    </div>
  );
};

export default Skill;
