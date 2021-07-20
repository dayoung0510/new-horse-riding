import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GroundDiv, GoalLine, HorseLine, HorseGrid } from 'components/styles';
import { useGameContext } from 'App/gameContext';
import { horses, speeds } from 'App/datas';

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
  const {
    state: { second, isOngoing },
    dispatch,
  } = useGameContext();

  console.log('isOngoing :', isOngoing);

  useEffect(() => {
    if (isOngoing) {
      const Count = setInterval(() => {
        if (isOngoing === true && second < speeds[0].length - 1) {
          console.log(second);
          clearInterval(Count);
          return dispatch({ type: 'COUNT' });
        }
        dispatch({ type: 'FINISH' });
      }, 300);
      return () => {
        clearInterval(Count);
      };
    }
  });

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
