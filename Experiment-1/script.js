function showMessage() {
  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const age = document.getElementById("ageInput").value.trim();

  if (name === "" || email === "" || age === "") {
    alert("⚠️ Please fill all fields!");
  } else {
    alert(
      `${name}, you have successfully registered!\nEmail: ${email}\nAge: ${age}`
    );
  }
}
