import React from 'react';
import { speeds } from 'App/datas';
import { useGameContext } from 'App/gameContext';
import styled, { css, FlattenInterpolation } from 'styled-components';

type Props = {
  bg: string;
  name: string;
  speed?: number;
};

const Shape = styled.div<Props>`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: absolute;
  bottom: 0;
  ${({ bg }): FlattenInterpolation<Props> => css`
    background-color: ${bg};
  `}
`;

const Horse: React.FC<Props> = ({ bg, name, speed = 0 }) => {
  const {
    state: { second },
  } = useGameContext();

  return (
    <>
      <Shape
        style={{ bottom: `${speeds[speed][second]}%` }}
        name={name}
        bg={bg}
      >
        {name}
      </Shape>
    </>
  );
};

export default Horse;
