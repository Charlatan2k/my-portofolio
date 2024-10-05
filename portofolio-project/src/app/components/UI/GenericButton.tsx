'use client';

import styled from 'styled-components';

interface ButtonProps {
  children: string;
  className: string;
}

const GenericButton = styled.button`
  width: 146px;
  height: 50px;
  border: 2px solid #5dd2c0;
  border-radius: 5px;
  font-size: 20px;
  font-family: 'SF Mono', 'Courier New', 'Consolas', 'Lucida Console', monospace;
  text-align: center;
  transition: all 0.12s ease-in-out;

  &:hover {
    background-color: var(--primary-blue);
    color: var(--primary-gray);
    font-weight: bold;
  }
`;

const Button = ({ children, className }: ButtonProps) => {
  return <GenericButton className={className}>{children}</GenericButton>;
};

export default Button;
