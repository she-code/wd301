import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description?: string;
  dueDate: Date;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: new Date(),
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (this.state.title === "") {
      alert("Please enter a title");
      return;
    } else if (!this.state.dueDate) {
      alert("Please enter a due date");
      return;
    }
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ description: event.target.value });
  };
  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ dueDate: new Date(event.target.value) });
  };
  render() {
    return (
      <form onSubmit={this.addTask} className="m-2">
        <div className="p-3">
          <input
            className="focus:outline-none border-2 border-gray-500 focus:border-green-600 p-2 rounded-lg w-full"
            id="todoTitle "
            type="text"
            value={this.state.title}
            onChange={this.titleChanged}
          />
        </div>
        <div className="p-3">
          <input
            id="todoDescription"
            className="focus:outline-none border-2 border-gray-500 focus:border-green-600 p-2 rounded-lg w-full"
            type="text"
            value={this.state.description}
            onChange={this.descriptionChanged}
          />
        </div>
        <div className="p-3">
          <input
            type="date"
            className="focus:outline-none border-2 border-gray-500 focus:border-green-600 p-2 rounded-lg w-full"
            id="todoDueDate"
            value={this.state.dueDate.toISOString().split("T")[0]}
            onChange={this.dateChanged}
          />
        </div>

        <button
          type="submit"
          id="addTaskButton"
          className="bg-green-600 hover:bg-green-500 text-white p-2 rounded-md"
        >
          Add Item
        </button>
      </form>
    );
  }
}
export default TaskForm;
