import {
  ADD_ITEM, COMPLETE_ITEM, DELETE_ITEM, SEARCH_ITEM, SORT_LIST,
} from '../constants';
// eslint-disable-next-line no-unused-vars
import { IInitialState } from '../../types/state.dt';

const INITIAL_STATE: IInitialState = {
  list: [],
  flag: 'all',
  search: '',
};

export const form = (state = INITIAL_STATE, action: any): IInitialState => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: Date.now(),
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case SORT_LIST:
      return {
        ...state,
        flag: action.payload.filter,
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload.id),
      };
    case COMPLETE_ITEM:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload.id) {
            // eslint-disable-next-line no-param-reassign
            item.completed = !item.completed;
            return item;
          }
          return item;
        }),
      };
    case SEARCH_ITEM:
      return {
        ...state,
        search: action.payload.text,
      };
    default:
      return state;
  }
};
