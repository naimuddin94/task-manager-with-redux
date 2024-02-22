import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Learn Redux Core Concept",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mir Hussain",
      priority: "high",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({
          id: 1,
          status: "pending",
          ...payload,
        });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const targetTask = state.tasks.find((task) => task.id === payload);
      if (targetTask.status === "pending") {
        targetTask.status = "running";
      } else if (targetTask.status === "running") {
        targetTask.status = "complete";
      } else if (targetTask.status === "complete") {
        targetTask.status = "archive";
      }
    },
  },
});

export const { addTask, removeTask, updateStatus } = taskSlice.actions;

export default taskSlice.reducer;
