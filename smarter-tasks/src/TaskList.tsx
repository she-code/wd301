// import React from "react";
// import Task from "./Task";
// interface Props {}

// interface TaskItem {
//   title: string;
// }
// interface State {
//   tasks: TaskItem[];
// }
// class TaskList extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       tasks: [],
//     };
//   }

//   componentDidMount() {
//     const tasks = [{ title: "Pay rent" }, { title: "Submit assignment" }];
//     this.setState((state, props) => ({
//       tasks,
//     }));
//   }
//   render() {
//     return this.state.tasks.map((task, idx) => (
//       <Task key={idx} title={task.title} />
//     ));
//   }
// }
// export default TaskList;
import React from "react";
import Task from "./Task";
import { TaskItem } from "./type";
interface Props {
  tasks: TaskItem[];
}

interface State {}
class TaskList extends React.Component<Props, State> {
  render() {
    return this.props.tasks.map((task, idx) => (
      <Task key={idx} title={task.title} />
    ));
  }
}
export default TaskList;
