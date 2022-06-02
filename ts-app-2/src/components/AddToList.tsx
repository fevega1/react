import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'],
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    age: '',
    imgUrl: '',
    name: '',
    note: ''
  });
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  const handleAdd = () => {
    if (!input.name || !input.age || !input.imgUrl) { return }
    setPeople([
      ...people,
      {
        age: parseInt(input.age),
        imgUrl: input.imgUrl,
        name: input.name,
        note: input.note
      }
    ]);

    setInput({
      age: '',
      imgUrl: '',
      name: '',
      note: ''
    });
  }

  return (
    <div className="flex center">
      <div className="AddToList-form">
        <h4>Add To List</h4>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={input.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image Url"
          name="imgUrl"
          value={input.imgUrl}
          onChange={handleChange}
        />
        <textarea
          placeholder="Note"
          name="note"
          value={input.note}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add to List</button>
      </div>
    </div>
  );
}

export default AddToList;