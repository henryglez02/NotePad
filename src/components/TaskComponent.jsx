import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskComponent(task) {
  const { deleteTask } = useContext(TaskContext);

  const handleClick = () => {
    deleteTask(task.id);
  };
  return (
    <div className="flex flex-col items-center border border-slate-300  max-w-sm p-2 rounded-md">
      <h3 className="font-semibold text-xl capitalize">{task.title}</h3>
      <p className="text-lg text-slate-700">{task.description}</p>
      <button className=" bg-red-300 hover:bg-red-400 rounded-lg px-1 mt-2 text-slate-900 font-normal " onClick={handleClick}>Delete</button>
    </div>
  );
}
