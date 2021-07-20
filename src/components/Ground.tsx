import React, { useEffect } from 'react';
import { GroundDiv, GoalLine, HorseLine, HorseGrid } from 'components/styles';
import Horse from 'components/Horse';
import { useGameContext } from 'App/gameContext';
import { horses, speeds } from 'App/datas';

const Ground: React.FC = () => {
  const {
    state: { second, isOngoing, speedDistribution },
    dispatch,
  } = useGameContext();

  useEffect(() => {
    if (isOngoing) {
      const Count = setInterval(() => {
        if (isOngoing === true && second < speeds[0].length - 1) {
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
            const speedArrIdx = speedDistribution[horse.id];
            return (
              <HorseGrid key={horse.id}>
                <Horse bg={horse.color} name={horse.name} speed={speedArrIdx} />
              </HorseGrid>
            );
          })}
        </HorseLine>
      </GroundDiv>
    </>
  );
};

export default Ground;
