/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  const deleteTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  const createTask = (title, description) => {
    setTaskList([
      ...taskList,
      {
        title,
        description,
        id: taskList.length,
      },
    ]);
  };

  return (
    <TaskContext.Provider value={{ taskList, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
}
