import useTaskStore from "../store/task.store";
import ListItem from "./ListItem";
import BucketEmpty from "./icons/BucketEmpty";

const List = () => {
  const { tasks } = useTaskStore();

  return (
    <ul className="flex flex-col gap-4 p-4 h-96 rounded-md shadow-sm shadow-zinc-700 bg-zinc-800 overflow-y-auto max-h-96">
      {tasks.length === 0 && (
        <div className="w-full h-full grid place-content-center">
          <figure className="flex justify-center">
            <BucketEmpty className="h-28 w-28" />
          </figure>
          <p className="text-center text-4xl mt-4 w-full">Empty data</p>
        </div>
      )}

      {tasks.length > 0 &&
        tasks.map((task) => <ListItem key={task.id} task={task} />)}
    </ul>
  );
};

export default List;
