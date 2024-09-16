import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    count: 0,
    list: [],
  },
  reducers: {
    addTask: (state, {payload}) => {
      const tasks = {
        id: Math.random() * 100,
        text: payload,
      };
      console.log(tasks)
      state.list.push(tasks);
      state.count += 1;
    },
    remoteTask: (state, {payload}) => {
      state.list = state.list.filter((task) => task.id !== payload);
      state.count -= 1;
    },
  },
});

export const { actions, reducer } = taskSlice;