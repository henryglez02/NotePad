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
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 px-6 max-w-full">
      {taskList.map((task, index) => (
        <div key={index}>
          <TaskComponent
            task={task}
            id={task.id}
            description={task.description}
            title={task.title}
          />
        </div>
      ))}
    </div>
  );
}
