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
    <div className="flex flex-col max-w-md items-center  gap-3 my-6 rounded-md w-full px-6">
      <input
        type="text"
        value={title}
        placeholder="Personal Info..."
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
        className=" rounded-md text-white text-lg font-semibold px-2 w-full bg-[#21262d]  border border-zinc-600"
      />
      <textarea
        value={content}
        placeholder="Hi! My name is henry..."
        onChange={(e) => setContent(e.target.value)}
        className="rounded-md px-2 text-white text-lg border border-zinc-600 w-full h-32  bg-[#21262d] "
        style={{ resize: "none" }}
      ></textarea>
      <button
        className=" bg-blue-400  mx-auto px-5  rounded-lg text-lg font-semibold hover:bg-blue-500"
        onClick={handleClick}
      >
        Save
      </button>
    </div>
  );
}
