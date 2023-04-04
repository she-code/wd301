import React from "react";
import "./TaskCard.css";
interface TaskCardProps {
  title: string;
  dueDate?: string;
  assigneeName: string;
  completedAtDate?:string;
}
const TaskCard = (props:TaskCardProps) => {
  const { title, dueDate, completedAtDate, assigneeName } = props;
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold ">{title}</h2>
      {dueDate ? (
        <p>Due on: {dueDate}</p>
      ) : (
        <p>Completed on: {completedAtDate}</p>
      )}
      <p>Assignee: {assigneeName}</p>
    </div>
  );
};
export default TaskCard;
/**
 * Props
 * data is transfered from parent to child using props
 *data flows in only 1D
 */
