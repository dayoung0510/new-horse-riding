import React from 'react';
import styled from 'styled-components';
import { GroundDiv, GoalLine, HorseLine, HorseGrid } from 'components/styles';
import { horses } from 'App/datas';

const Horse = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: absolute;
  bottom: 0;
  background-color: ${(props) => props.color};
`;

const Ground: React.FC = () => {
  return (
    <>
      <GroundDiv>
        <GoalLine>GOAL</GoalLine>
        <HorseLine>
          {horses.map((horse) => {
            return (
              <HorseGrid key={horse.id}>
                <Horse color={horse.color}>{horse.name}</Horse>
              </HorseGrid>
            );
          })}
        </HorseLine>
      </GroundDiv>
    </>
  );
};

export default Ground;
