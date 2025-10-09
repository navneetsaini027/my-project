// src/App.js

import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import AddEmployeeForm from './components/AddEmployeeForm';
import './App.css';

function App() {
  // Shuru mein dikhane ke liye kuch sample employees
  const initialEmployees = [
    { id: 1, name: 'Aarav Sharma', designation: 'Software Engineer' },
    { id: 2, name: 'Riya Verma', designation: 'Project Manager' },
    { id: 3, name: 'Vikram Singh', designation: 'UI/UX Designer' },
  ];

  // 'useState' Hook employees ki list ko store karne ke liye
  const [employees, setEmployees] = useState(initialEmployees);

  // Naya employee add karne ka function
  const addEmployee = (employee) => {
    // Naye employee ko ek unique ID dete hain
    const newEmployee = { ...employee, id: Date.now() };
    // 'employees' array mein naye employee ko jodte hain
    setEmployees([...employees, newEmployee]);
  };

  // Employee ko delete karne ka function
  const deleteEmployee = (id) => {
    // Sirf un employees ko rakhte hain jinki ID delete wali ID se match nahi karti
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="app-container">
      <h1>Employee Management System 🧑‍💼</h1>
      <AddEmployeeForm onAdd={addEmployee} />
      <EmployeeList employees={employees} onDelete={deleteEmployee} />
    </div>
  );
}

export default App;