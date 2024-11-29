const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');


let counter = 0;


incrementButton.addEventListener('click', () => {
    counter++; 
    counterElement.textContent = counter;
    alert(`Counter is now: ${counter}`); 
});