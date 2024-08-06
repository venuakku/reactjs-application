import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EmployeeDetails from "./components/EmployeeDetails";
import AddEditEmployee from "./components/AddEditEmployee";
import DeleteEmployee from "./components/DeleteEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/add-employee" element={<AddEditEmployee />} />
        <Route path="/edit-employee/:id" element={<AddEditEmployee />} />
        <Route path="/delete-employee/:id" element={<DeleteEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
