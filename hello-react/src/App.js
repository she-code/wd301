import TaskCard from "./TaskCard";
function App() {
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
          <button className="bg-gray-300 w-full my-3 flex p-3 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            New task
          </button>
        </div>
        <div className="p-5 border-4 rounded-xl">
          <h1 className="text-center mb-3 font-bold text-2xl">Done</h1>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get the approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
          />
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
