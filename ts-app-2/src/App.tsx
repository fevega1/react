import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string,
    age: number,
    imgUrl: string,
    note?: string
  }[]
}
// <IState['people']>
function App() {
  const [people, setPeople] = useState<IState['people']>([{
    name: 'Lebron James',
    age: 36,
    imgUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
    note: 'One of the best NBA players'
  }]);

  return (
    <div className="App">
      <h1>TS React App</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
