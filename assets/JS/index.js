document.getElementById('counter').innerHTML = `
    <div class="father">
        <img src="assets/img/counter.png" alt="">
        <h2>Contiamo!</h2>

        <div>
            <button id="aumenta" type="tooltip" title="Aumenta">+</button>
            <button id="riduci" type="tooltip" title="Riduci">-</button>
        </div>

        <h2 id="counterDisplay">0</h2>
    </div>
`;


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
