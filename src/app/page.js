import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";

const tasks = [
  {
    id: 1,
    title: "Task 1",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Task 2",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Task 3",
    isCompleted: false,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-y-3 w-96 h-96">
        <div className="flex justify-between items-center bg-gradient-to-br from-purple-800 to-purple-500 shadow-md text-white px-6 py-4">
          <h1 className="text-xl font-bold">ToDo List</h1>
          <button className="hover:opacity-85">
            <AdjustmentsHorizontalIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="bg-white border border-purple-100 shadow-md pt-3 flex flex-col grow">
          <div className="text-right px-3 pb-3">
            {tasks.length > 0 && (
              <span className="text-purple-500 text-xs">
                {tasks.length}
                {tasks.length > 1 ? " tasks" : " task"}
              </span>
            )}
          </div>
          <ul className="flex flex-col gap-3 px-6">
            {tasks.map((task) => (
              <li key={task.id} className="flex gap-2">
                <input id={task.id} type="checkbox" />
                <label htmlFor={task.id} className="text-slate-600">
                  {task.title}
                </label>
              </li>
            ))}
          </ul>

          <div className="flex items-center mt-auto">
            <input
              type="text"
              placeholder="Task title"
              className="border-none bg-purple-100 px-6 py-3 grow placeholder:text-purple-300"
            />
            <button className="bg-purple-500 text-white px-6 py-3 grow-0">
              Add
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
