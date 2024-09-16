import { configureStore } from "@reduxjs/toolkit";
import { reducer as taskReducer} from "./task/task.slice";


export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});