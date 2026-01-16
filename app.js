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
const fishIcons = document.querySelectorAll(".fish");
const ratingResult = document.getElementById("ratingResult");

fishIcons.forEach(fish => {
  fish.addEventListener("click", () => {
    const rating = fish.getAttribute("data-value");

    fishIcons.forEach(icon => {
      icon.classList.remove("active");
      if (icon.getAttribute("data-value") <= rating) {
        icon.classList.add("active");
      }
    });

    ratingResult.textContent = `You rated this ${rating} fish 🐟`;
  });
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
function fishingSurvey() {
  const questions = [
    "Did you catch a fish? (yes or no)",
    "What kind of fish did you catch?",
    "How long was the fish? (in inches)",
    "How much did it weigh? (in pounds)"
  ];

  const answers = [];

  for (let i = 0; i < questions.length; i++) {
    let response = "";

    while (response === "") {
      response = prompt(questions[i]);

      if (response === null) {
        alert("Survey canceled.");
        return;
      }
    }

    answers.push(response);
  }

  displayResults(answers);
}
function displayResults(answers) {
  const output = document.getElementById("surveyResults");

  output.innerHTML = `
    <h3>Fishing Trip Summary 🎣</h3>
    <p><strong>Caught a fish:</strong> ${answers[0]}</p>
    <p><strong>Fish type:</strong> ${answers[1]}</p>
    <p><strong>Length:</strong> ${answers[2]} inches</p>
    <p><strong>Weight:</strong> ${answers[3]} lbs</p>
  `;
}
