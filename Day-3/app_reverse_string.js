// grab references to the input element and the output div
var inputField = d3.select("#text");
var outputField = d3.select(".output");

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to handle input change
function handleChange(event) {

  // grab the value of the input field
  let inputText = d3.event.target.value;

  // clear the existing output
  outputField.text(null);

  // reverse the input string
  inputText = reverseString(inputText.toLowerCase());

  // Set the output text to the reversed input string
  outputField.text(inputText);
}

// Attach an event to detect changes to the input field.
inputField.on("change", handleChange);
