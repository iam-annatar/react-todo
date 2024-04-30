import type { ACTIONS } from "../constants";

// Shared types

export interface TodoItems {
  id: number;
  text: string;
  complete: boolean;
  date: string;
}

// Context types

export interface TodoProviderProps {
  children: React.ReactNode;
}

export interface TodoContextType {
  todos: TodoItems[];
  dispatch: React.Dispatch<Action>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

// Reducer types

export type ActionsType = (typeof ACTIONS)[keyof typeof ACTIONS];

export interface Action {
  type: ActionsType;
  payload?: TodoItems;
}
