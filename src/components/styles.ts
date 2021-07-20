import styled from 'styled-components';

export const Title = styled.div`
  font-weight: 800;
  font-size: 2rem;
  padding: 1rem 0;
  text-align: center;
`;

export const Div = styled.div`
  select {
    margin: 0 0.5rem;
    padding: 0.5rem;
  }
  input {
    padding: 0.5rem;
  }
`;
export const Line = styled.div`
  margin: 2rem 0;
`;

export const Btn = styled.button`
  background: #fff;
  border: 0;
  outline: 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  border-radius: 0.5rem;
  border: 1px solid gray;
`;

export const GroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: burlywood;
  position: relative;
`;

export const GoalLine = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 1.2rem;
  background-color: #222;
  color: lightgray;
  font-size: 0.8rem;
  letter-spacing: 1.5rem;
  text-align: center;
`;

export const HorseLine = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #fff;
`;

export const HorseGrid = styled.div`
  width: 20%;
  height: 100%;
  border-left: 1px dashed #ececec;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const RedTxt = styled.span`
  color: red;
`;

export const GreenTxt = styled.span`
  color: green;
`;
