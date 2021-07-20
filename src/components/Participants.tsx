import React from 'react';
import { Title, Div, Line, Btn } from 'components/styles';
import { useGameContext } from 'App/gameContext';

const Participant: React.FC = () => {
  const {
    state: { users },
    dispatch,
  } = useGameContext();

  console.log(users);

  return (
    <>
      <Div>
        <Title>참가자</Title>

        <Btn onClick={() => dispatch({ type: 'CREATE' })}>시작</Btn>
      </Div>
    </>
  );
};

export default Participant;
