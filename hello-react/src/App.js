import TaskCard from "./TaskCard";
function App() {
  let message = {};
  return (
    <div>
      <div>
        <h1>Pending</h1>
        <TaskCard title="Build the website with static content" />
        <TaskCard title="Build the website with static content" />
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}

export default App;
/**
 * Component nesting
 * rship bn parent to child is thru composition
 */
