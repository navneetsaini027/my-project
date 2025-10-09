// src/components/EmployeeList.js

import React from 'react';

function EmployeeList({ employees, onDelete }) {
  return (
    <div className="list-container">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found. Please add one.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeList;