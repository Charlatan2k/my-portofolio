'use client';

import styled from 'styled-components';

interface SideElementProps {
  orientation: 'left' | 'right';
}

const StyledSideElementLine = styled.div<SideElementProps>`
  width: 40px;
  position: fixed;
  bottom: 0;
  border: 2px solid red;
  left: ${(props) => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${(props) => (props.orientation === 'left' ? 'auto' : '40px')};
`;

const SideElement = ({ orientation }: SideElementProps) => {
  return (
    <StyledSideElementLine orientation={orientation}></StyledSideElementLine>
  );
};

export default SideElement;
