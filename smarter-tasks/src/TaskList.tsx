import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
  handleDeleteCB: (id: number) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task key={idx} tasks={task} handleDeleteCB={props.handleDeleteCB} />
  ));
  return <>{list}</>;
};
export default TaskList;
