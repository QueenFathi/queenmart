"use client";

import { createContext, useContext, useReducer } from "react";
import {
  searchReducer,
  initialSearchState,
  SearchState,
  SearchAction,
} from "./search_reducer";

type SearchContextType = {
  state: SearchState;
  dispatch: React.Dispatch<SearchAction>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
