import React, { useCallback, ChangeEvent } from "react";
import { Title, Div, Line, Btn } from "components/styles";
import { useGameContext } from "App/gameContext";
import { horses } from "App/datas";

const Participant: React.FC = () => {
  const {
    state: { users, bettings },
    dispatch,
  } = useGameContext();

  const handleChange = useCallback(
    (idx: number) =>
      (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        dispatch({ type: "BETTING", name, value, idx });
      },
    [dispatch]
  );

  return (
    <>
      <Div>
        <Title>참가자</Title>
        {users.map((user, idx) => {
          return (
            <Line key={idx}>
              {user.name}
              <select onChange={handleChange(idx)} name="bettingHorse">
                <option value="">말을 선택하세요</option>
                {horses.map((horse) => {
                  return (
                    <option key={horse.id} value={horse.id}>
                      {horse.name}
                    </option>
                  );
                })}
              </select>
              <input
                name="bettingMoney"
                onChange={handleChange(idx)}
                placeholder="금액을 입력하세요"
                required
              />
            </Line>
          );
        })}
        <Btn
          onClick={() => {
            dispatch({ type: "START" });
          }}
        >
          시작
        </Btn>
      </Div>
    </>
  );
};

export default Participant;
