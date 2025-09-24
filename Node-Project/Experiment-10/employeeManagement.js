// employeeManagement.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let employees = [];

// Function to show menu
function showMenu() {
    console.log("\n=== Employee Management System ===");
    console.log("1. Add Employee");
    console.log("2. View Employees");
    console.log("3. Update Employee");
    console.log("4. Delete Employee");
    console.log("5. Exit");

    rl.question("Enter your choice: ", (choice) => {
        switch (choice.trim()) {
            case "1":
                addEmployee();
                break;
            case "2":
                viewEmployees();
                break;
            case "3":
                updateEmployee();
                break;
            case "4":
                deleteEmployee();
                break;
            case "5":
                console.log("Exiting Employee Management System. Goodbye!");
                rl.close();
                break;
            default:
                console.log("❌ Invalid choice! Please try again.");
                showMenu();
        }
    });
}

// Add Employee
function addEmployee() {
    rl.question("Enter employee name: ", (name) => {
        rl.question("Enter employee ID: ", (id) => {
            employees.push({ id: id.trim(), name: name.trim() });
            console.log(`✅ Employee ${name.trim()} added successfully!`);
            showMenu();
        });
    });
}

// View Employees
function viewEmployees() {
    if (employees.length === 0) {
        console.log("⚠ No employees found.");
    } else {
        console.log("\n--- Employee List ---");
        employees.forEach((emp, index) => {
            console.log(`${index + 1}. ID: ${emp.id}, Name: ${emp.name}`);
        });
    }
    showMenu();
}

// Update Employee
function updateEmployee() {
    rl.question("Enter Employee ID to update: ", (id) => {
        let employee = employees.find((emp) => emp.id === id.trim());
        if (!employee) {
            console.log("❌ Employee not found!");
            showMenu();
        } else {
            rl.question("Enter new name: ", (newName) => {
                employee.name = newName.trim();
                console.log(`✅ Employee ${id.trim()} updated successfully!`);
                showMenu();
            });
        }
    });
}

// Delete Employee
function deleteEmployee() {
    rl.question("Enter Employee ID to delete: ", (id) => {
        let index = employees.findIndex((emp) => emp.id === id.trim());
        if (index === -1) {
            console.log("❌ Employee not found!");
        } else {
            console.log(`🗑 Employee ${employees[index].name} deleted successfully!`);
            employees.splice(index, 1);
        }
        showMenu();
    });
}

// Start the program
showMenu();
