import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import './styles.scss';

interface IProps {
  sortList: (filter: string) => void;
}

const SortItems = ({ sortList }: IProps) => {
  const [state, setState] = useState({
    all: true,
    active: false,
    completed: false,
  });

  const handleClick = (filter: string) => {
    sortList(filter);
    const updateState = state;
    Object.keys(updateState).forEach((item) => {
      updateState[item] = item === filter;
    });
    setState((prevState) => ({
      ...prevState,
      updateState,
    }));
  };

  return (
    <div className="sortitems">
      <button disabled={state.all} onClick={() => handleClick('all')}>all</button>
      <button disabled={state.active} onClick={() => handleClick('active')}>active</button>
      <button disabled={state.completed} onClick={() => handleClick('completed')}>completed</button>
    </div>
  );
};

export default connect(null, actions)(SortItems);
