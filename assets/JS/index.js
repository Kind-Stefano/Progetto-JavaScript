let count = 0;

const counterDisplay = document.getElementById('counterDisplay');
const incrementButton = document.getElementById('aumenta');
const decrementButton = document.getElementById('riduci');

function updateDisplay() {
    counterDisplay.textContent = count;
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);