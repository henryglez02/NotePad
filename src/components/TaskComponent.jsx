import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskComponent(task) {
  const { deleteTask } = useContext(TaskContext);

  const handleClick = () => {
    deleteTask(task.id);
  };
  return (
    <div className="flex relative flex-col gap-1 items-center border border-zinc-600 w-full  p-2 rounded-lg">
      <h3 className="font-semibold  text-xl text-slate-100 text-ellipsis   ">{task.title}</h3>
      <p className="text-lg text-slate-400">{task.description}</p>
      <button className="absolute top-0 right-0 " onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-rose-500 hover:fill-rose-600 w-6 h-6 "
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
