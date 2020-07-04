import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/store';
import AddItem from './components/add-item';
import ListItems from './components/list-items';
import SortItems from './components/sort-items';
import SearchItem from './components/search-item';

const App: React.FC = () => (
        <Provider store={store}>
            <div className="container">
              <h1>Todo-list</h1>
              <AddItem/>
              <SortItems/>
              <ListItems/>
              <SearchItem/>
            </div>
        </Provider>
);

export default App;
