function convertToUppercase() {
  var input = document.getElementById("text-input").value;
  var output = input.toUpperCase();
  document.getElementById("text-output").value = output;
}

function convertToLowercase() {
  var input = document.getElementById("text-input").value;
  var output = input.toLowerCase();
  document.getElementById("text-output").value = output;
}

function convertToTitlecase() {
  var input = document.getElementById("text-input").value;
  var output = input.toLowerCase().replace(/\b\w/g, function (letter) {
    return letter.toUpperCase();
  });
  document.getElementById("text-output").value = output;
}
