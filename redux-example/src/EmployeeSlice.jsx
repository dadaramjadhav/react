import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    { id: 101, name: "emp101" },
    { id: 102, name: "emp102" },
    { id: 103, name: "emp103" },
  ],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter((e) => e.id != action.payload);
    },
  },
});
export const { addEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
