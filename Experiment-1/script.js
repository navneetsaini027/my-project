function showMessage() {
  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const age = document.getElementById("ageInput").value.trim();
<<<<<<< HEAD

  if (name === "" || email === "" || age === "") {
    alert("⚠️ Please fill all fields!");
  } else {
    alert(
      `${name}, you have successfully registered!\nEmail: ${email}\nAge: ${age}`
    );
=======
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
>>>>>>> 761cb189ee24b1c275af15000d21763a29a9b77b
  }
}
