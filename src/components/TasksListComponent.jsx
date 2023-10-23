import { TaskContext } from "../context/TaskContext";
import { TaskComponent } from "./TaskComponent";
import { useContext } from "react";

export function TasksListComponent() {
  const { taskList } = useContext(TaskContext);

  if (taskList.length === 0) {
    return (
      <h1 className=" mt-4 text-center text-xl font-bold">
        No Tasks
      </h1>
    );
  }

  return (
    
    <div className="grid grid-cols-1 gap-2 mx-auto max-w-sm mt-2 ">
      {taskList.map((task, index) => (
        <div key={index}>
          
          <TaskComponent task={task} id={task.id} description={task.description} title={task.title} />
        </div>

      ))}
    </div>
  );
}
