import { InstagramIcon, GithubIcon, LinkedinIcon } from '../icons';

interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case 'Instagram':
      return <InstagramIcon />;
    case 'LinkedIn':
      return <LinkedinIcon />;
    case 'Github':
      return <GithubIcon />;
    default:
      return Error;
  }
};

export default Icon;
