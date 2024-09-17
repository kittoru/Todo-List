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
        status: false,
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
    toggleCompletedStatus: (state, {payload}) => {
      const index = state.list.findIndex(task => task.id === payload);
      state.list[index].status = !state.list[index].status;
      console.log(state.list[index].status);
    },
    updateTask: (state, {payload}) => {
      const index = state.list.findIndex(task => task.id === payload.id);
      state.list[index].text = payload.text;
    },
  },
});

export const { actions, reducer } = taskSlice;