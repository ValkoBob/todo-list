import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { IItem, IState } from '../../types/state.dt';
import * as actions from '../../redux/actions';
import Item from '../item';
import './styles.scss';

interface IProps {
  list: IItem[],
  flag: string,
  search: string,
  deleteItem: (id: number) => void,
  completeItem: (id: number) => void,
}

const ListItems = ({
  list, flag, search, deleteItem, completeItem,
}: IProps) => {
  const [state, setState] = useState(list);
  useEffect(() => {
    if (flag === 'all') {
      setState(list);
    } else if (flag === 'active') {
      setState(list.filter((t) => !t.completed));
    } else if (flag === 'completed') {
      setState(list.filter((t) => t.completed));
    }
    if (search !== '') {
      setState((prevState) => prevState.filter((item) => item.text.toLowerCase().includes(search)));
    }
  }, [flag, list, search]);
  return (
    <div className="list">
      {state.map((item: IItem) => (
          <div key={item.id} className="list-item">
            <button className={ `list-item-completed ${item.completed ? 'variant1' : 'variant2'}`}
                    onClick={() => completeItem(item.id)}>
              {item.completed ? 'completed' : 'active'}
            </button>
            <Item item={item}/>
            <button className="list-item-delete"
                    onClick={() => deleteItem(item.id)}>delete</button>
          </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  const { list, flag, search } = state.form;
  return { list, flag, search };
};

export default connect(mapStateToProps, actions)(ListItems);
