/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function PanelComponent() {
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClick = () => {
    if (title && content !== "") {
      createTask(title, content);
      setContent("");
      setTitle("");
    } else {
      alert("You must complete both entries!!!");
    }
  };

  return (
    <div className="flex flex-col pt-2 max-w-sm mx-auto  rounded-md">
      <input
        type="text"
        value={title}
        placeholder="Title..."
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
        className=" rounded-md text-lg font-semibold px-2 border-slate-300 border"
      />
      <textarea
        value={content}
        cols="20"
        rows="8"
        placeholder="Description..."
        onChange={(e) => setContent(e.target.value)}
        className=" my-2 border rounded-md px-2 text-lg border-slate-300"
      ></textarea>
      <button className=" bg-blue-200  m-auto mb-2 px-1 rounded-lg text-lg font-normal hover:bg-blue-300" onClick={handleClick}>
        Save
      </button>
      <hr  className="bg-gray-900" />
      
    </div>
  );
}
