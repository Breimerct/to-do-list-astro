import Trash from "./icons/Trash.tsx";
import Pencil from "./icons/Pencil.tsx";
import Check from "./icons/Check.tsx";
import CloseIcon from "./icons/CloseIcon.tsx";
import useTaskStore, { type ITask } from "../store/task.store.ts";
import { useState } from "react";

interface IListItemProps {
  task: ITask;
}

const ListItem = ({ task }: IListItemProps) => {

  const { deleteTask, updateTask } = useTaskStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const removeItem = (id:number) => {
    deleteTask(id);
  }

  const toggleIsEditing = (isEditing:boolean, taskName?:string) => {
    setIsEditing(!isEditing);
    setEditValue(taskName || "");
  }

  const submitEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e)
    const updatedTask:ITask = {
      date: task.date,
      id: task.id,
      name: editValue,
      status: task.status
    }
    updateTask({id: updatedTask.id, task: updatedTask});
    toggleIsEditing(isEditing);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };
  
  return (
    <li
      id={`task-${task.id}`}
      className={`
      relative rounded-md flex items-center justify-between shadow-sm block w-full shadow-zinc-800 px-3 py-2 pl-[2.3rem] hover:bg-zinc-950/70 transition-all bg-zinc-900 after:w-5 after:h-5 after:rounded-full after:absolute after:content-'' after:z-10 after:left-2 after:top-[50%] after:translate-y-[-50%]
      ${task.status ? "after:bg-green-500" : "after:bg-red-500"}
    `}
    >
      <div
        className="ml-2 w-full mr-2"
      >
        <p className={`
        text-lg font-medium text-white truncate
        ${isEditing ? "hidden" : ""}
        `}>{task.name}</p>

      <form id={"edit"+task.id} onSubmit={submitEdit}>
        <input className={`
          block mb-1
          w-full
          ${!isEditing ? "hidden" : ""}
        `} 
        value={editValue}
        onChange={handleChange}
        type="text"
        />
        </form>
        
        <span className="text-sm font-mono">
          {new Date(task.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <div className={`
        flex gap-2
        ${isEditing ? "hidden" : ""}
      `}>
        <button onClick={() => toggleIsEditing(isEditing, task.name)} className="flex justify-center items-center bg-sky-700 h-[52px] w-[52px] rounded-lg hover:bg-sky-600">
          <Pencil/>
        </button>
        <button onClick={() => removeItem(task.id)}  className="flex justify-center items-center bg-red-800 h-[52px] w-[52px] rounded-lg hover:bg-red-600">
          <Trash/>
        </button>
      </div>

      <div className={`
        flex gap-2
        ${!isEditing ? "hidden" : ""}
      `}>
        <button type="submit" form={"edit"+task.id} className="flex justify-center items-center bg-green-700 h-[52px] w-[52px] rounded-lg hover:bg-green-600">
          <Check/>
        </button>
        <button onClick={() => toggleIsEditing(isEditing, task.name)}  className="flex justify-center items-center bg-red-800 h-[52px] w-[52px] rounded-lg hover:bg-red-600">
          <CloseIcon/>
        </button>
      </div>
    </li>
  );
};

export default ListItem;
