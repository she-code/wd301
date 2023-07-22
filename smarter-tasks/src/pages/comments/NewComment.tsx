import React from "react";
import { useProjectsState } from "../../context/projects/context";
import { SubmitHandler, useForm } from "react-hook-form";
import { CommentsDetailsPayload } from "../../context/comment/types";
import { useCommentsDispatch } from "../../context/comment/context";
import { addComment } from "../../context/comment/actions";
import { useParams } from "react-router-dom";
import exp from "constants";
import { refreshTasks } from "../../context/task/actions";
import { useTasksDispatch } from "../../context/task/context";

const NewComment: React.FC<{ taskID: string }> = ({ taskID }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentsDetailsPayload>();
  const projectState = useProjectsState();
  const commentDispatch = useCommentsDispatch();
  let { projectID } = useParams();
  const selectedProject = projectState?.projects.filter(
    (project) => `${project.id}` === projectID
  )?.[0];
  if (!selectedProject) {
    return <>No such Project!</>;
  }
  const taskDispatch = useTasksDispatch();

  const createComment: SubmitHandler<CommentsDetailsPayload> = async (data) => {
    try {
      // Invoke the actual API and create a task.
      addComment(commentDispatch, projectID ?? "", taskID, data);
      refreshTasks(taskDispatch, projectID ?? "");
    } catch (error) {
      console.error("Operation failed:", error);
    }
  };

  return (
    <div className="my-3">
      <form
        className="w-full flex justify-between"
        onSubmit={handleSubmit(createComment)}
      >
        <input
          type="text"
          required
          placeholder="Write comment"
          id="commentBox"
          {...register("description", { required: true })}
          className=" w-4/6 border rounded-md py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
        <button
          type="submit"
          id="addCommentBtn"
          //   onClick={closeModal}
          className=" inline-flex justify-center rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default NewComment;
