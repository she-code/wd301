import TaskCard from "./TaskCard";
function App() {
  let message = {};
  return (
    <div className="container m-5 p-5 mx-auto">
      <h1 className="font-bold text-3xl mb-2">Smarter Tasks</h1>
      <p className="text-lg font-bold mb-5">
        Project:
        <span className="font-normal">
          {" "}
          Graduation Final Year Project (Revamp College Website)
        </span>
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className=" p-5 border-4 rounded-xl">
          <h1 className="text-center mb-3 text-2xl font-bold">Pending</h1>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add a blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
          />
        </div>
        <div className="p-5 border-4 rounded-xl">
          <h1 className="text-center mb-3 font-bold text-2xl">Done</h1>
          <TaskCard title="Add Tailwind" />
          <TaskCard title="Submit for review" />
        </div>
      </div>
    </div>
  );
}

export default App;
/**
 * Component nesting
 * rship bn parent to child is thru composition
 */
