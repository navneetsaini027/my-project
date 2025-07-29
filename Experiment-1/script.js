function showMessage() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter your name before registering.");
  } else {
    alert("✅ " + name + ", you have successfully registered!");
  }
}
