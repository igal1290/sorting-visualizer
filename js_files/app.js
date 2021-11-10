// ---------------- Variables ----------------
const newArray = document.querySelector('.array-btn');
const arraySize = document.querySelector('#arraySize');
const arraySpeed = document.querySelector('#arraySpeed');
let numberOfBars = 100;
let array = [];
let time = 50; // 50ms

// ---------------- Functions ----------------
createNewArray(numberOfBars);

// Swap two elements
function swap(elem1, elem2) {
  let temp = elem1.style.height; // temp holds a copy of elem1 while elem1 swaps with elem2
  elem1.style.height = elem2.style.height;
  elem2.style.height = temp;
}

function waitTime(time) {
  // in milliseconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, time);
  });
}

// Disable size input
function disableSizeInput() {
  arraySize.disabled = true;
}

// Enable size input
function enableSizeInput() {
  arraySize.disabled = false;
}

// Disable new array button
function disableNewArrayButton() {
  newArray.disabled = true;
}

// Enable new array button
function enableNewArrayButton() {
  newArray.disabled = false;
}

// Disable sort buttons during sorting
function disableSortButton() {
  document.querySelector('.sort-btn').disabled = true;
}

// Enable sort buttons
function enableSortButton() {
  document.querySelector('.sort-btn').disabled = false;
}

// Create a new array
function createNewArray(numberOfBars) {
  // invoke removeBars to remove previous bars before starting new array
  removeBars();

  // Generate new array
  array = [];
  for (let i = 0; i < numberOfBars; i++) {
    array.push(Math.floor(Math.random() * 220) + 1);
  }

  // Select the div #bars element
  const bars = document.querySelector('#bars');

  // Create multiple element divs using a loop and adding class 'bar col'
  for (let i = 0; i < numberOfBars; i++) {
    const bar = document.createElement('div');
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-bar');
    bar.classList.add(`barNumber${i}`);
    bars.appendChild(bar);
  }
}

// Remove previous bars
function removeBars() {
  const bars = document.querySelector('#bars');
  bars.innerHTML = '';
}

// ---------------- Event Listeners ----------------]
// New Array Button
newArray.addEventListener('click', () => {
  enableSortButton();
  enableSizeInput();
  createNewArray(arraySize.value);
});

// Modify the size of bars
arraySize.addEventListener('input', () => {
  createNewArray(parseInt(arraySize.value));
});

// Modify the speed of bars
arraySpeed.addEventListener('input', () => {
  time = 200 - parseInt(arraySpeed.value);
});
