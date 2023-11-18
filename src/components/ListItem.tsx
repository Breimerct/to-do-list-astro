import Trash from "./icons/Trash.tsx";
import Pencil from "./icons/Pencil.tsx";
import useTaskStore, { type ITask } from "../store/task.store.ts";

interface IListItemProps {
  task: ITask;
}

const ListItem = ({ task }: IListItemProps) => {

  const { deleteTask } = useTaskStore();

  const removeItem = (id:number) => {
    deleteTask(id);
  }

  return (
    <li
      id={`task-${task.id}`}
      className={`
      relative rounded-md flex items-center justify-between shadow-sm block w-full shadow-zinc-800 px-3 py-2 pl-[2.3rem] hover:bg-zinc-950/70 transition-all bg-zinc-900 after:w-5 after:h-5 after:rounded-full after:absolute after:content-'' after:z-10 after:left-2 after:top-[50%] after:translate-y-[-50%]
      ${task.status ? "after:bg-green-500" : "after:bg-red-500"}
    `}
    >
      <div>
        <p className="text-lg font-medium text-white truncate">{task.name}</p>

        <span className="text-sm font-mono">
          {new Date(task.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <div className="flex gap-2">
        <button className="flex justify-center items-center bg-sky-700 h-[52px] w-[52px] rounded-lg hover:bg-sky-600">
          <Pencil/>
        </button>
        <button onClick={() => removeItem(task.id)}  className="flex justify-center items-center bg-red-800 h-[52px] w-[52px] rounded-lg hover:bg-red-600">
          <Trash/>
        </button>
      </div>
    </li>
  );
};

export default ListItem;
