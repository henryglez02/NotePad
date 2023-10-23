/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { data } from "../data/data";

export const TaskContext = createContext();


export function TaskContextProvider({children}) {
  
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(data);
  }, []);

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
