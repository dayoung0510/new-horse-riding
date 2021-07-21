import React, { useEffect } from "react";
import { Title, Div, Line, GreenTxt, RedTxt } from "components/styles";
import { useGameContext } from "App/gameContext";

const defaultMoney = 100000;

const Assets: React.FC = () => {
  const {
    state: { users },
  } = useGameContext();

  return (
    <Div>
      <Title>내 지갑</Title>

      {users.map((user) => {
        const difference = defaultMoney - user.assets;
        return (
          <Line key={user.id}>
            {user.name} {user.assets.toLocaleString("ko-KR")}원 (
            {difference <= 0 ? (
              <GreenTxt>+{Math.abs(difference)}원</GreenTxt>
            ) : (
              <>
                <RedTxt>-{Math.abs(difference)}원</RedTxt>
              </>
            )}
            )
          </Line>
        );
      })}
    </Div>
  );
};

export default Assets;
