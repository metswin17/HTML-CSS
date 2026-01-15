function addImageBorder() {
  document.querySelector("img").style.border = "5px solid gray";
document.querySelector("img").style.border = "5px solid gray";
document.querySelector("img").style.border = "none";
}
function clearGreeting() {
  document.getElementById("greeting").textContent = "";
  document.getElementById("nameInput").value = "";
}



 
function showGreeting() {
  // Gets the text entered into the input field with id="nameInput"
  // .value is needed because getElementById returns the element itself
  let userName = document.getElementById("nameInput").value;
 
  // Removes extra spaces at the beginning and end of the input
  // and checks if the input is empty
  if (userName.trim() === "") {
    // If no name was entered, display a generic greeting
    document.getElementById("greeting").textContent = "Welcome!";
  } else {
    // If a name was entered, display a personalized greeting
    document.getElementById("greeting").textContent =
      "Welcome, " + userName + "!";
  }
}
  