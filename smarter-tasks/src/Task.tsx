import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";
import { Link } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TaskProp {
  title: string;
  dueDate: string;
  description: string;
}

const Task = (props: {
  tasks: TaskItem;
  handleDeleteCB: (id: number) => void;
}) => {
  const { tasks } = props;
  return (
    <li className="TaskItem shadow-md border border-slate-100 list-none">
      <div className="flex justify-between">
        <Link to={`/tasks/${tasks.id}`}>
          <h2 className="text-base font-bold my-1">{tasks.title}</h2>
        </Link>{" "}
        <button
          className="deleteTaskButton"
          onClick={() => props.handleDeleteCB(tasks.id)}
        >
          Delete
        </button>
      </div>
      <p className="text-sm text-slate-500">{tasks.dueDate}</p>
      <p className="text-sm text-slate-500">
        Description: {tasks.description ?? ""}
      </p>
    </li>
  );
};
export default Task;
