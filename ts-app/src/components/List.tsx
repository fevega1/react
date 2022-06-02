import React from 'react';
import { IState as IProps } from '../App';

const List: React.FC<IProps> = ({ people }) => {

  const renderList = () => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            {person.url && <img className="List-img" src={person.url} alt="" />}
            <h2>{person.name}</h2>
          </div>
          <p>{person.age ? `${person.age} years old` : null }</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  }

  const hello = (): JSX.Element => {
    return (
      <>
        <div>a</div>
        <div>b</div>
      </>
    );
  };

  return (
    <ul>
      {hello()}
      {renderList()}
    </ul>
  );
}

export default List;
