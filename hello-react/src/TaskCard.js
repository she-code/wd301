const TaskCard = (props) => {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
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
