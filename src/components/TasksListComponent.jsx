import { TaskContext } from "../context/TaskContext";
import { TaskComponent } from "./TaskComponent";
import { useContext } from "react";

export function TasksListComponent() {
  const { taskList } = useContext(TaskContext);

  if (taskList.length === 0) {
    return (
      <h1 className=" mt-4 text-center text-xl font-bold text-slate-200">
        No Tasks
      </h1>
    );
  }

  return (
    
    <div className="grid grid-cols-1 gap-3 w-full px-6">
      
      {taskList.map((task, index) => (
        <div key={index}>
          
          <TaskComponent task={task} id={task.id} description={task.description} title={task.title} />
        </div>

      ))}
    </div>
  );
}
