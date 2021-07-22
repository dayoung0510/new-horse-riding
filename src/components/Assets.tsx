import React, { useEffect } from "react";
import { Title, Div, Line, GreenTxt, RedTxt } from "components/styles";
import { useGameContext } from "App/gameContext";

const Assets: React.FC = () => {
  const {
    state: { users, bettings, afterGame, winnerHorse },
  } = useGameContext();

  useEffect(() => {
    const Result = setTimeout(() => {}, 300);
    return () => {
      clearTimeout(Result);
    };
  }, [winnerHorse]);

  return (
    <Div>
      <Title>내 지갑</Title>
      {users.map((user, idx) => {
        return (
          <Line key={user.id}>
            {user.name} {user.assets.toLocaleString("ko-KR")}원{" "}
            {Number(bettings[idx].bettingHorse) === winnerHorse ? (
              <GreenTxt>+{Math.abs(afterGame[idx].money)}원</GreenTxt>
            ) : (
              <>
                <RedTxt>-{Math.abs(afterGame[idx].money)}원</RedTxt>
              </>
            )}
          </Line>
        );
      })}
    </Div>
  );
};

export default React.memo(Assets);
