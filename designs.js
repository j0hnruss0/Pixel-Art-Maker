// Select color and size input
const colorPicker = document.getElementById("colorPicker");
const sizePicker = document.getElementById("sizePicker");
// Create grid, defines grid size, and height, width variables
const canvas = document.getElementById("pixelCanvas");
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;

makeGrid(height, width);

// Code for how the 'submit' button functions
sizePicker.addEventListener('click', function(event) {
  event.preventDefault();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  canvas.firstChild.remove();
  makeGrid(height, width);
});

function makeGrid(height, width) {
  for (let x = 0; x < height; x++) {
    let row = canvas.insertRow(x);
    for (let y = 0; y < width; y++) {
      let cell = row.insertCell(y);
      // Adds color to cell when clicked
      canvas.addEventListener('mousedown', function(event) {
        let color = colorPicker.value;
        event.target.style.backgroundColor = color;
        }
      );
    }
  }
}

// Thanks to the Knowledge Page at Udacity.com for answering my question
// and providing me with tips on how to complete my project.
// Additional credit goes to W3Schools.com for general help on js and DOM commands 