'use client';

import styled from 'styled-components';

interface ButtonProps {
  children: string;
  className?: string;
  size?: 'big';
}

const GenericButton = styled.button.attrs((props) => ({
  className: props.className,
}))<ButtonProps>`
  width: ${(props) => {
    switch (props.size) {
      case 'big':
        return '210px';
      default:
        return '146px';
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case 'big':
        return '60px';
      default:
        return '50px';
    }
  }};
  border: 2px solid #5dd2c0;
  border-radius: 5px;
  font-size: ${(props) => {
    switch (props.size) {
      case 'big':
        return '25px';
      default:
        return '20px';
    }
  }};
  font-family: 'SF Mono', 'Courier New', 'Consolas', 'Lucida Console', monospace;
  text-align: center;
  transition: all 0.12s ease-in-out;

  &:hover {
    background-color: var(--primary-blue);
    color: var(--primary-gray);
    font-weight: bold;
  }
`;

const Button = ({ children, className, size }: ButtonProps) => {
  return (
    <GenericButton className={className} size={size}>
      {children}
    </GenericButton>
  );
};

export default Button;
