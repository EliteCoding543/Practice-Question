import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../Utlis/tudoSlice";

const EditTaskModal = ({ setOpen, data }) => {
   const [input, setInput] = useState(data.text)
   const dis = useDispatch()
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">
            Edit Task
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl font-bold text-slate-500 hover:text-red-500"
          >
            &times;
          </button>
        </div>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter updated task"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <div className="mt-5 flex justify-end gap-3">
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg bg-slate-200 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-300"
          >
            Cancel
          </button>

          <button
            onClick={() => {dis(editTask({id : data.id, text : input})), setOpen(false)}}
            className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Update Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
