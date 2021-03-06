import React, { createContext, useContext, useReducer } from "react";
import { horses } from "App/datas";
import { clearInterval } from "timers";

export type UserType = {
  id: number;
  name: string;
  assets: number;
};
export type AfterGameType = { id: number; money: number };
export type BettingType = {
  bettingPerson: string;
  bettingHorse: number;
  bettingMoney: number;
};
export type GameStateType = {
  users: UserType[];
  bettings: BettingType[];
  speedDistribution: number[];
  isOngoing: boolean;
  second: number;
  winnerHorse: number;
  afterGame: AfterGameType[];
};

const initialState: GameStateType = {
  users: [
    { id: 0, name: "김라마", assets: 100000 },
    { id: 1, name: "박낙타", assets: 100000 },
    { id: 2, name: "알파카", assets: 100000 },
  ],
  bettings: [
    {
      bettingPerson: "",
      bettingHorse: 0,
      bettingMoney: 0,
    },
    {
      bettingPerson: "",
      bettingHorse: 0,
      bettingMoney: 0,
    },
    {
      bettingPerson: "",
      bettingHorse: 0,
      bettingMoney: 0,
    },
  ],
  speedDistribution: [],
  isOngoing: false,
  second: 0,
  winnerHorse: -1,
  afterGame: [
    { id: 0, money: 0 },
    { id: 1, money: 0 },
    { id: 2, money: 0 },
  ],
};

const GameContext = createContext<{
  state: GameStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

export const useGameContext = () => useContext(GameContext);

type ActionType =
  | {
      type: "START";
    }
  | {
      type: "COUNT";
    }
  | {
      type: "FINISH";
    }
  | {
      type: "BETTING";
      name: string;
      value: number;
      idx: number;
    }
  | {
      type: "WALLET";
    }
  | {
      type: "INSTANT";
    };

const reducer = (state: GameStateType, action: ActionType) => {
  const { second } = state;

  switch (action.type) {
    case "START":
      state.second = 0;
      state.isOngoing = true;

      const arr = horses.map((horse) => {
        return horse.id;
      });
      let currentIdx = arr.length;
      while (currentIdx !== 0) {
        const randomIdx = Math.floor(Math.random() * currentIdx);
        currentIdx -= 1;
        [arr[currentIdx], arr[randomIdx]] = [arr[randomIdx], arr[currentIdx]];
      }
      return {
        ...state,
        speedDistribution: arr,
      };

    case "COUNT":
      return { ...state, second: second + 1 };

    case "FINISH":
      return {
        ...state,
        isOngoing: false,
        winnerHorse: state.speedDistribution.indexOf(0),
      };

    case "BETTING":
      const { name, value, idx } = action;
      return {
        ...state,
        bettings: [
          ...state.bettings.slice(0, idx),
          {
            ...state.bettings[idx],
            bettingPerson: state.users[idx].name,
            [name]: value,
          },
          ...state.bettings.slice(idx + 1),
        ],
      };

    case "WALLET":
      state.bettings.map((bet, idx) => {
        if (Number(bet.bettingHorse) === state.winnerHorse) {
          return (state.users[idx].assets += Number(bet.bettingMoney));
        } else {
          return (state.users[idx].assets -= Number(bet.bettingMoney));
        }
      });
      return { ...state };

    case "INSTANT":
      console.log("!", state.bettings);
      state.bettings.map((b, idx) => {
        state.afterGame[idx].money = b.bettingMoney;
      });
      console.log(state.afterGame);
      return { ...state, ...state.bettings };
  }
};

export const GameContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
