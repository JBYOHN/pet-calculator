// Simple arithmetic pet calculator app.

const calculator = {
  multiply1(a) {
    return a * 7 + " years old in dog years.";
  },
  multiply2(a) {
    return a / 7 + " years old in human years.";
  }
};

const form = document.querySelector("form");
const name1 = document.querySelector("#name-1");
const num1 = document.querySelector("#num-1");
const select = document.querySelector("select");
const output = document.querySelector("output");

//Use an anonymous callback function as the 2nd argument.
form.addEventListener("submit", function(event) {
  //Prevent the default browser behavior - DON'T submit
  event.preventDefault();

  //form inputs have a property called value.

  output.textContent =
    name1.value + " is " + calculator[select.value](num1.value);
});
