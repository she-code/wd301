import React, { useEffect } from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = (props: TaskAppProp) => {
  // const [taskAppState, setTaskAppState] = React.useState<TaskAppState>({
  //   tasks: [],
  // });
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );
  useEffect(() => {
    const id = setTimeout(() => {
      console.log(`Saved ${taskAppState.tasks.length} items to backend...`);
    }, 5000);
    return () => {
      console.log("clear or cancel any existing network call");
      clearTimeout(id);
    };
  }, [taskAppState.tasks]);
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
    console.log(task);
  };
  const deleteTask = (id: number) => {
    const previousState = { ...taskAppState };
    previousState.tasks = previousState.tasks.filter((task) => task.id !== id);
    setTaskAppState({ tasks: previousState.tasks });
  };
  return (
    <div>
      <div className="container py-10  w-2/4 mx-auto">
        <h1 className="text-3xl mb-2 font-bold text-slate-700">
          Smarter Tasks
        </h1>
        <h1 className="text-md mb-6 text-slate-600">
          <span className="font-bold">Project: </span>
          Graduation Final Year Project (Revamp college website)
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-xl p-4">
            <h1 className="text-slate-500 font-bold text-center mb-2">
              Pending
            </h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={taskAppState.tasks} handleDeleteCB={deleteTask} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskApp;
