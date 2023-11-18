import type { ITask } from "../store/task.store";

interface IListItemProps {
  task: ITask;
}

const ListItem = ({ task }: IListItemProps) => {
  return (
    <li
      id={`task-${task.id}`}
      className={`
      relative rounded-md shadow-sm block w-full shadow-zinc-800 px-3 py-2 pl-[2.3rem] hover:bg-zinc-950/70 transition-all bg-zinc-900 after:w-5 after:h-5 after:rounded-full after:absolute after:content-'' after:z-10 after:left-2 after:top-[50%] after:translate-y-[-50%]
      ${task.status ? "after:bg-green-500" : "after:bg-red-500"}
    `}
    >
      <p className="text-lg font-medium text-white truncate">{task.name}</p>

      <span className="text-sm font-mono">
        {new Date(task.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
    </li>
  );
};

export default ListItem;
