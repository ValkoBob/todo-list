export interface IInitialState {
  list: IItem[],
  flag: string,
  search: string,
}

export interface IState {
  form: IInitialState
}

export interface IItem {
  id: number,
  text: string,
  completed: boolean,
}
