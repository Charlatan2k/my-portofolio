interface ProgressBarProps {
  percentage: number;
}

const CircularProgressBar = ({ percentage }: ProgressBarProps) => {
  const strokeDasharray = `${percentage * 2.8} ${280 - percentage * 2.8}`;

  return (
    <div className='flex items-center justify-center'>
      {/* Outer Circle */}
      <svg className='w-28 h-28' style={{ transform: 'rotate(-50deg)' }}>
        <circle
          cx='50%'
          cy='50%'
          r='45%'
          stroke='var(--primary-gray)'
          strokeWidth='10'
          fill='transparent'
        />
        <circle
          cx='50%'
          cy='50%'
          r='45%'
          stroke='var(--primary-blue)'
          strokeWidth='10'
          fill='transparent'
          strokeDasharray={strokeDasharray}
          strokeDashoffset='0'
          strokeLinecap='round'
          style={{ transition: 'stroke-dasharray 0.5s ease-in-out' }}
        />
      </svg>
      {/* Percentage Text */}
      <span className='absolute text-xl font-bold'>{percentage}%</span>
    </div>
  );
};

export default CircularProgressBar;
