import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import './styles.scss';

interface IProps {
  searchItem: (text: string) => void;
}

const SearchItem = ({ searchItem }: IProps) => (
  <div className="searchitem">
    <label htmlFor="search">Find your item</label>
    <input type="text"
           onChange={(e: { target: HTMLInputElement; }) => searchItem(e.target.value)}
           className="search"
           placeholder="search item"
           id="search"
    />
  </div>
);

export default connect(null, actions)(SearchItem);
