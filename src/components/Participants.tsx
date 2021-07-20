import React from 'react';
import { Title, Div, Line, Btn } from 'components/styles';
import { useGameContext } from 'App/gameContext';
import { horses } from 'App/datas';

const Participant: React.FC = () => {
  const {
    state: { users, speedDistribution },
    dispatch,
  } = useGameContext();

  return (
    <>
      <Div>
        <Title>참가자</Title>
        {users.map((user, idx) => {
          return (
            <Line key={idx}>
              {user.name}
              <select>
                <option value=''>말을 선택하세요</option>
                {horses.map((horse) => {
                  return (
                    <option key={horse.id} value={horse.id}>
                      {horse.name}
                    </option>
                  );
                })}
              </select>
              <input placeholder='금액을 입력하세요' required />
            </Line>
          );
        })}
        <Btn
          onClick={() => {
            console.log(speedDistribution);
            dispatch({ type: 'START' });
          }}
        >
          시작
        </Btn>
      </Div>
    </>
  );
};

export default Participant;
