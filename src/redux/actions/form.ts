import {
  ADD_ITEM, COMPLETE_ITEM, DELETE_ITEM, SEARCH_ITEM, SORT_LIST,
} from '../constants';

export const addItem = (text: string) => ({
  type: ADD_ITEM,
  payload: { text },
});

export const sortList = (filter: string) => ({
  type: SORT_LIST,
  payload: { filter },
});

export const deleteItem = (id: number) => ({
  type: DELETE_ITEM,
  payload: { id },
});

export const completeItem = (id: number) => ({
  type: COMPLETE_ITEM,
  payload: { id },
});

export const searchItem = (text: string) => ({
  type: SEARCH_ITEM,
  payload: { text },
});
