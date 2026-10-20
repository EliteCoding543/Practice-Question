import { useState } from "react";
import { useDispatch } from "react-redux";
import { addask } from "../Utlis/tudoSlice.js";
import TodoList from "./TodoList.jsx";

const Tudo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!input.trim()) {
      return;
    }

    dispatch(addask(input.trim()));
    setInput("");
  };

  return (
    <div>
      <div className="m-20 w-1/2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="h-10 w-40 border px-5 font-bold outline-none"
          type="text"
          placeholder="Enter task"
        />

        <button
          onClick={handleClick}
          className="ml-5 rounded-xl bg-blue-700 px-10 py-2 font-bold text-white"
        >
          Add Task
        </button>
      </div>

      <TodoList />
    </div>
  );
};

export default Tudo;