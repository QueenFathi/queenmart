export type SearchState = {
  isOpen: boolean;
};

export type SearchAction =
  | { type: "OPEN_SEARCH" }
  | { type: "CLOSE_SEARCH" }
  | { type: "TOGGLE_SEARCH" };

export const initialSearchState: SearchState = {
  isOpen: false,
};

export function searchReducer(
  state: SearchState,
  action: SearchAction
): SearchState {
  switch (action.type) {
    case "OPEN_SEARCH":
      return { ...state, isOpen: true };
    case "CLOSE_SEARCH":
      return { ...state, isOpen: false };
    case "TOGGLE_SEARCH":
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}
