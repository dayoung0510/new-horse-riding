import React from 'react';
import Board from 'components/Board';
import { GameContextProvider } from 'App/gameContext';

function App() {
  return (
    <div className='App'>
      <GameContextProvider>
        <Board />
      </GameContextProvider>
    </div>
  );
}

export default App;
