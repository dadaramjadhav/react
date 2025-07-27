import { useDispatch, useSelector } from "react-redux";
import { addEmployee, deleteEmployee } from "./EmployeeSlice";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
export const Employee = () => {
  const [emp, setEmp] = useState("");
  const [searchEmp, setSearchEmp] = useState("");
  const employees = useSelector((state) => state.employeesList.employees);
  const foundEmployee = useSelector((state) =>
    state.employeesList.employees.find(
      (e) => e.id.toString() === searchEmp.toString()
    )
  );
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };
  const handleAddEmp = () => {
    dispatch(addEmployee({ id: nanoid(), name: emp }));
  };
  return (
    <>
      <div>Employee</div>
      add employee:{" "}
      <input type="text" onChange={(e) => setEmp(e.target.value)} />
      <button onClick={handleAddEmp}>add employee</button>
      <hr />
      <ul>
        {employees.map((e) => (
          <li key={e.id}>
            {e.id}....{e.name}...
            <button onClick={() => handleDelete(e.id)}>delete</button>
          </li>
        ))}
      </ul>
      <hr />
      <h3>Get employee by id</h3>
      Enter id:{" "}
      <input type="text" onChange={(e) => setSearchEmp(e.target.value)} />
      <hr />
      {foundEmployee ? <div>found</div> : <div>not found</div>}
    </>
  );
};
