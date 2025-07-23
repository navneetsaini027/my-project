function showMessage() {
  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const age = document.getElementById("ageInput").value.trim();
  const outputDiv = document.getElementById("outputMessage");

  if (name === "" || email === "" || age === "") {
    alert("Please fill all the fields before registering.");
    outputDiv.innerHTML = ""; 
  } else {
    const message = `
       ${name}, you have successfully registered!<br>
       Email: ${email}<br>
       Age: ${age}
    `;
    outputDiv.innerHTML = message;
  }
}
