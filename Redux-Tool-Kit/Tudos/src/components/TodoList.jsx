import { useSelector } from "react-redux";

const TodoList = () => {
  const data = useSelector((store) => store.tudo.tudos);

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => (
          <p
            key={item.id}
            className="text-black text-xl font-bold"
          >
            {item.text}
          </p>
        ))
      ) : (
        <p className="text-red-500">No Task</p>
      )}
    </div>
  );
};

export default TodoList;
