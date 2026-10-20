import { useDispatch, useSelector } from "react-redux";
import { removetask } from "../Utlis/tudoSlice";
import { useState } from "react";
import EditTaskModal from "./editTaskModal";

const TodoList = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const data = useSelector((store) => store.tudo.tudos);
  const dispatch = useDispatch();

  return (
    <div className="mx-20 mt-6 w-1/2">
      <div className="flex flex-col gap-3">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <p className="wrap-break-words text-base font-semibold text-slate-800">
                {item.text}
              </p>

              <div className="flex items-center justify-center gap-5">
                <button
                  onClick={() => dispatch(removetask(item.id))}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-lg font-bold text-red-600 transition hover:bg-red-600 hover:text-white"
                >
                  x
                </button>

                <button
                  onClick={() => {
                    setSelectedTask(item)
                    setOpen(true)
                  }}
                  className="flex h-10 w-25 shrink-0 items-center justify-center rounded-lg bg-green-100 text-lg font-bold text-green-700 transition hover:bg-green-900 hover:text-white"
                >
                  Edit Task
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center font-medium text-slate-500">
            No Task
          </p>
        )}

        {isOpen && selectedTask && <EditTaskModal setOpen={setOpen} data={selectedTask}/>}
      </div>
    </div>
  );
};

export default TodoList;