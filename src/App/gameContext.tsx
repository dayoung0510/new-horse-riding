import React, { createContext, useContext, useReducer } from 'react';

export type UserType = {
  id: number;
  name: string;
  assets: number;
};
export type UserStateType = {
  users: UserType[];
};

const initialState: UserStateType = {
  users: [
    { id: 0, name: '김라마', assets: 100000 },
    { id: 1, name: '박낙타', assets: 100000 },
    { id: 2, name: '알파카', assets: 100000 },
  ],
};

const GameContext = createContext<{
  state: UserStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

export const useGameContext = () => useContext(GameContext);

type ActionType =
  | {
      type: 'INITIALIZE';
      users: UserType[];
    }
  | {
      type: 'CREATE';
      id: number;
      name: string;
      assets: number;
    };

const reducer = (state: UserStateType, action: ActionType) => {
  const { users } = state;

  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        users: action.users || [],
      };
    case 'CREATE':
      console.log('create!!!');
      return {
        ...state,
        users: users,
      };
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
