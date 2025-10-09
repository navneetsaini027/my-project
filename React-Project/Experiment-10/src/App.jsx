import { useState } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState(new Set());
  const [formData, setFormData] = useState({ id: '', name: '', designation: '' });
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: '', designation: '' });

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (editingId) {
      // Update employee
      setEmployees(employees.map(emp => 
        emp.id === editingId 
          ? { ...emp, name: editFormData.name, designation: editFormData.designation }
          : emp
      ));
      setEditingId(null);
      setEditFormData({ name: '', designation: '' });
    } else {
      // Add new employee
      if (employees.find(emp => emp.id === formData.id)) {
        alert('Employee ID already exists!');
        return;
      }
      setEmployees([...employees, { ...formData }]);
      setFormData({ id: '', name: '', designation: '' });
    }
  };

  const handleEdit = (id) => {
    const emp = employees.find(e => e.id === id);
    setEditFormData({ name: emp.name, designation: emp.designation });
    setEditingId(id);
  };

  const handleDeleteSelected = () => {
    if (selectedEmployees.size === 0) {
      alert('No employees selected!');
      return;
    }
    if (window.confirm(`Are you sure you want to delete ${selectedEmployees.size} selected employee(s)?`)) {
      setEmployees(employees.filter(emp => !selectedEmployees.has(emp.id)));
      setSelectedEmployees(new Set());
    }
  };

  const handleSelect = (id, checked) => {
    const newSelected = new Set(selectedEmployees);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedEmployees(newSelected);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditInputChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditFormData({ name: '', designation: '' });
  };

  return (
    <div className="App">
      <h1>Employee Management System</h1>

      {/* Add/Update Form */}
      <form onSubmit={handleAddOrUpdate} className="form-section">
        <h2>{editingId ? 'Update Employee' : 'Add Employee'}</h2>
        {!editingId && (
          <input
            type="text"
            name="id"
            placeholder="Employee ID"
            value={formData.id}
            onChange={handleInputChange}
            required
          />
        )}
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={editingId ? editFormData.name : formData.name}
          onChange={editingId ? handleEditInputChange : handleInputChange}
          required
        />
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={editingId ? editFormData.designation : formData.designation}
          onChange={editingId ? handleEditInputChange : handleInputChange}
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
        {editingId && <button type="button" onClick={cancelEdit}>Cancel</button>}
      </form>

      {/* Employees Table */}
      <div className="table-section">
        <h2>Employees List</h2>
        <button onClick={handleDeleteSelected} className="delete-btn">Delete Selected</button>
        {employees.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Select</th>
                <th>ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedEmployees.has(emp.id)}
                      onChange={(e) => handleSelect(emp.id, e.target.checked)}
                    />
                  </td>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.designation}</td>
                  <td>
                    <button onClick={() => handleEdit(emp.id)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
