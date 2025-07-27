import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import userReducer from "./UserSlice";
import employeeReducer from "./EmployeeSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    employeesList: employeeReducer,
  },
});
