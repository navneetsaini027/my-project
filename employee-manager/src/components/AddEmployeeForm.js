// src/components/AddEmployeeForm.js

import React, { useState } from 'react';

function AddEmployeeForm({ onAdd }) {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Page ko reload hone se rokta hai
    if (!name || !designation) {
      alert('Please fill in all fields');
      return;
    }
    // 'onAdd' function ko call karke naye employee ka data App.js ko bhejte hain
    onAdd({ name, designation });
    // Input fields ko khali kar dete hain
    setName('');
    setDesignation('');
  };

  return (
    <div className="form-container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployeeForm;