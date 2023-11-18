import { create } from "zustand";

export interface ITask {
  id: number;
  name: string;
  status: boolean;
  date: string;
}

type State = {
  tasks: ITask[];
};

type Actions = {
  addTask: (task: ITask) => void;
  deleteTask: (id: number) => void;
  updateTask: (payload: { id: number; task: ITask }) => void;
  reset: () => void;
};

const initialState: State = {
  tasks: [],
};

const useTaskStore = create<State & Actions>((set) => ({
  ...initialState,

  addTask: (task: ITask) =>
    set((state: State) => ({
      tasks: [...state.tasks, task],
    })),

  deleteTask: (id: number) =>
    set((state: State) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  updateTask: (payload: { id: number; task: ITask }) =>
    set((state: State) => ({
      tasks: state.tasks.map((task) => {
        if (task.id === payload.id) {
          return {
            ...task,
            ...payload.task,
          };
        }
        return task;
      }),
    })),

  reset: () => set(() => initialState),
}));

export default useTaskStore;
