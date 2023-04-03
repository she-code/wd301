import "./TaskCard.css";

const TaskCard = (props) => {
  const { title } = props;
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold ">{title}</h2>
      <p>Completed on</p>
      <p>Assigned: name</p>
    </div>
  );
};
export default TaskCard;
/**
 * Props
 * data is transfered from parent to child using props
 *data flows in only 1D
 */
