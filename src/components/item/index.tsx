import React from 'react';
// eslint-disable-next-line no-unused-vars
import { IItem } from '../../types/state.dt';

interface IProps {
  item: IItem
}

const Item = ({ item }: IProps) => {
  const { text, completed } = item;
  return (
    <span style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}>
      {text}
    </span>
  );
};

export default Item;
