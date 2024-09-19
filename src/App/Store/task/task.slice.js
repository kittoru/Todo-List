import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    count: 0,
    list: [],
  },
  reducers: {
    addTask: (state, {payload}) => {
      const task = {
        id: Math.random() * 100,
        status: false,
        text: payload,
      };
      console.log(task)
      if (state.count === 0) {
        state.list.push(task);
      } else {
        const index = state.list.findIndex(item => item.status === true)
        state.list.splice(index, 0, task);
      }
      state.count += 1;
    },
    remoteTask: (state, {payload}) => {
      state.list = state.list.filter((task) => task.id !== payload);
      state.count -= 1;
    },
    toggleCompletedStatus: (state, {payload}) => {
      const index = state.list.findIndex(task => task.id === payload);
      state.list[index].status = !state.list[index].status;
      const trueList = state.list.filter(task => task.status === true);
      const falseList = state.list.filter(task => task.status === false);
      state.list = [...falseList, ...trueList];
    },
    updateTask: (state, {payload}) => {
      const index = state.list.findIndex(task => task.id === payload.id);
      state.list[index].text = payload.text;
    },
  },
});

export const { actions, reducer } = taskSlice;