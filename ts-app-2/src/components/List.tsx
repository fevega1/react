import React from 'react';
import { IState as IProps } from '../App';

const List: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <div className="List">
          <div className="flex">
            <img className='List-img' src={person.imgUrl} alt="" />
            <h4>{person.name}</h4>
          </div>
          {person.age && <p>{person.age} years old</p>}
          <p>{person.note}</p>
        </div>
      );
    });
  }

  return (
    <>
      {renderList()}
    </>
  );
}

export default List;