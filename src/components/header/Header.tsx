import { useState } from "react";
import "./Header.scss";
import useTaskStore, { type ITask } from "../../store/task.store";

const Header = () => {
  const { addTask, tasks } = useTaskStore();
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;

    const newTask: ITask = {
      id: Date.now(),
      name: search,
      status: false,
      date: new Date().toUTCString(),
    };

    addTask(newTask);
    setSearch("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <header className="mt-4 w-full">
      <form className="mx-auto" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="relative group w-full h-full block transition-all z-0">
            <input
              id="search"
              name="search"
              type="search"
              className="outline-none z-10 w-full pt-7 pb-2 px-4 [&>span]:text-2xl hover:bg-gray-800 bg-gray-900 transition-all border-b-2 border-gray-800 border-solid hover:shadow-sm hover:shadow-slate-600 hover:drop-shadow-md focus:outline-2 focus:outline-gray-800 rounded-sm"
              value={search}
              onChange={handleChange}
              placeholder="Enter your task name"
            />
            <span className="absolute top-[50%] left-3 translate-y-[-50%] my-auto inline-block opacity-50 text-xl transition-all duration-200">
              search
            </span>
          </label>
        </div>
      </form>
    </header>
  );
};

export default Header;
