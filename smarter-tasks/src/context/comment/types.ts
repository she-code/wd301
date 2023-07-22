export interface CommentListState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  comments: CommentDetails[];
}
export enum CommentListAvailableAction {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",

  DELETE_COMMENT_REQUEST = "DELETE_COMMENT_REQUEST",
  DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS",
  DELETE_COMMENT_FAILURE = "DELETE_COMMENT_FAILURE",

  CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",

  // Add action types
  UPDATE_COMMENT_REQUEST = "UPDATE_COMMENT_REQUEST",
  UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS",
  UPDATE_COMMENT_FAILURE = "UPDATE_COMMENT_FAILURE",

  REORDER_COMMENTS = "REORDER_COMMENTS",
}

export type CommentActions =
  //   | { type: CommentListAvailableAction.REORDER_COMMENTS; payload: ProjectData }
  | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }
  | {
      type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS;
      payload: any;
    }
  | { type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: CommentListAvailableAction.DELETE_COMMENT_REQUEST }
  | { type: CommentListAvailableAction.DELETE_COMMENT_SUCCESS }
  | { type: CommentListAvailableAction.DELETE_COMMENT_FAILURE; payload: string }
  | { type: CommentListAvailableAction.CREATE_COMMENT_REQUEST }
  | { type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS }
  | { type: CommentListAvailableAction.CREATE_COMMENT_FAILURE; payload: string }
  | { type: CommentListAvailableAction.UPDATE_COMMENT_REQUEST }
  | { type: CommentListAvailableAction.UPDATE_COMMENT_SUCCESS }
  | {
      type: CommentListAvailableAction.UPDATE_COMMENT_FAILURE;
      payload: string;
    };
// A type to hold dispatch actions in a context.
export type CommentsDispatch = React.Dispatch<CommentActions>;
export type CommentDetails = {
  [x: string]: any;
  id: number;
  task_id: number;
  owner: number;
  description: string;
  created_at: string;
};
export type CommentsDetailsPayload = Omit<
  CommentDetails,
  "id" | "task_id" | "created_at"
>;
export type Comments = {
  [k: string]: CommentDetails;
};
