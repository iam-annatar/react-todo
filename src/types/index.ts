import type { ACTIONS } from "../constants";

// Shared types

export interface Todo {
  id: number;
  text: string;
  complete: boolean;
  // date: string
}

// Context types

export interface TodoProviderProps {
  children: React.ReactNode;
}

export interface TodoContextType {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

// Reducer types

export type ActionsType = (typeof ACTIONS)[keyof typeof ACTIONS];

export interface Action {
  type: ActionsType;
  payload?: Todo;
}
