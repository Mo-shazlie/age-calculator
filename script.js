let birthYear = document.getElementById("BirthYear");
let button = document.getElementById("Button");
let result = document.getElementById("result");

button.addEventListener("click", function () {
  let theYear = birthYear.value;
  if (theYear === "") {
    result.textContent = "Please enter your birth year";
    return;
  }
  if (theYear > 2026) {
    result.textContent = "don't play with me, you are't born yet??";
    return;
  }

  let age = 2026 - theYear;
  result.textContent = `Your age is ${age}`;
});
console.log("");
