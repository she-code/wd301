import React, { createContext, useContext, useReducer } from "react";
import { CommentListState, CommentsDispatch } from "./types";
import { commentReducer, initialState } from "./reducer";
const CommentsStateContext = createContext<CommentListState>(initialState);
const CommentsDispatchContext = createContext<CommentsDispatch>(() => {});
export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Create a state and dispatch with `useReducer` passing in the `CommentReducer` and an initial state. Pass these as values to our contexts.
  const [state, dispatch] = useReducer(commentReducer, initialState);
  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};

// Create helper hooks to extract the `state` and `dispacth` out of the context.
export const useCommentsState = () => useContext(CommentsStateContext);
export const useCommentsDispatch = () => useContext(CommentsDispatchContext);
