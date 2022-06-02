import React, { useState } from 'react';
import AddToList from './components/AddToList';
import List from './components/List';
import './App.css';

export interface IState {
  people: {
    age: number,
    name: string,
    note?: string
    url: string,
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([{
    age: 36,
    name: 'Lebron James',
    note: 'Allergic to staying on the same team',
    url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
  }]);
  
  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
