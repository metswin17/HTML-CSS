document.querySelector("img").style.border = "5px solid gray";

function showGreeting() {
    let userName = document.getElementById("nameInput");
  
    if (userName.trim() !") {
      document.getElementById("greeting").textContent = "Welcome!";
    } else {
      document.getElementById("greeting").textContent =
        "Welcome, " + userName + "!";
    }
}
  