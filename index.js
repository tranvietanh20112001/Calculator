function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  var displayValue = document.getElementById("display").value;
  var result;
  try {
    result = eval(displayValue);
  } catch (error) {
    result = "Error";
  }
  document.getElementById("calculation").innerText = displayValue + " =";
  document.getElementById("display").value = result;
}
