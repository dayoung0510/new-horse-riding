import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGameContext } from 'App/gameContext';
import Participants from 'components/Participants';
import Assets from 'components/Assets';
import Ground from 'components/Ground';

const TopSection = styled.div`
  width: 100%;
  height: 50%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BottomSection = styled.div`
  width: 100%;
  height: 50%;
  background-color: gainsboro;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Div = styled.div`
  background-color: darkslategray;
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  box-sizing: border-box;
`;
const HalfDiv = styled.div`
  width: 50%;
  height: 100%;
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const Board: React.FC = () => {
  return (
    <>
      <Div>
        <FlexDiv>
          <HalfDiv>
            <TopSection>
              <Participants />
            </TopSection>
            <BottomSection>
              <Assets />
            </BottomSection>
          </HalfDiv>
          <HalfDiv>
            <Ground />
          </HalfDiv>
        </FlexDiv>
      </Div>
    </>
  );
};

export default Board;
