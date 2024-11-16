const title = document.createElement('h1');
const counterDisplay = document.createElement('h2');
const buttonContainer = document.createElement('div');
const incrementButton = document.createElement('button');
const decrementButton = document.createElement('button');

title.textContent = 'Contiamo!';
counterDisplay.textContent = '0';
incrementButton.textContent = '+';
decrementButton.textContent = '-';

document.body.appendChild(title);
document.body.appendChild(counterDisplay);
document.body.appendChild(buttonContainer);
buttonContainer.appendChild(incrementButton);
buttonContainer.appendChild(decrementButton);

let count = 0;

function updateDisplay() {
    counterDisplay.textContent = count;
}

incrementButton.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementButton.addEventListener('click', () => {
    count--;
    updateDisplay();
})

document.body.style.margin = '150px', '100px', '100px', '100px';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.flexDirection = 'column';
document.body.style.backgroundColor = '#B4C292';

title.style.fontSize = '40px';
title.style.fontFamily = 'Arial';

counterDisplay.style.fontSize = '50px';
counterDisplay.style.fontFamily = 'Arial';
counterDisplay.style.fontWeight = 'Normal';

incrementButton.style.fontSize = '35px';
incrementButton.style.margin = '10px';
incrementButton.style.padding = '5px 15px';
incrementButton.style.border = 'none';
incrementButton.style.borderRadius = '5px';

decrementButton.style.fontSize = '35px';
decrementButton.style.margin = '10px';
decrementButton.style.padding = '5px 15px';
decrementButton.style.border = 'none';
decrementButton.style.borderRadius = '5px';