function addImageBorder() {
  document.querySelector("img").style.border = "5px solid gray";
document.querySelector("img").style.border = "5px solid gray";
document.querySelector("img").style.border = "none";
}
function clearGreeting() {
  document.getElementById("greeting").textContent = "";
  document.getElementById("nameInput").value = "";
}
function chooseBorderColor() {
  let color = "";

  // Keep asking until the user enters something
  while (color.trim() === "") {
    color = prompt("Enter a border color (red, blue, green, hex, etc.):");

    // If user clicks Cancel, stop the loop
    if (color === null) {
      return;
    }
  }

  // Apply the border color
  document.querySelector("img").style.border = "5px solid " + color;
}
document.getElementById("submitBtn").addEventListener("click", function () {
  showGreeting();
  this.textContent = "Submitted!";
});



 
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
  