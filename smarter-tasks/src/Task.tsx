import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";
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
        <h2 className="text-base font-bold my-1">{tasks.title}</h2>
        <button
          id="deleteTaskButton "
          className="bg-green-500 text-white rounded px-2 py-1"
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
