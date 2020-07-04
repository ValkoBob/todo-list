import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import './styles.scss';

interface IProps {
  addItem: (text: string) => void;
}

const AddItem = ({ addItem }: IProps) => {
  const [text, setText] = useState('');
  const handleChange = (e: { target: HTMLInputElement; }) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text) {
      addItem(text);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) {
      handleSubmit();
    }
  };
  return (
      <div className="additem">
        <input type="text"
               onChange={handleChange}
               onKeyDown={handleKeyDown}
               value={text}
               placeholder="add new item"
        />
        <button type="submit"
               onClick={handleSubmit}
        > + </button>
      </div>
  );
};

export default connect(null, actions)(AddItem);
