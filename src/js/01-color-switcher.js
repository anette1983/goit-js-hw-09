const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
const bodyEl = document.body;
let SwitcherTimerId = null;



startButton.addEventListener('click', onStartBtnClick);
stopButton.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {    
SwitcherTimerId = setInterval(changeColor, 1000);
startButton.setAttribute('disabled', 'true');   
    
}

function changeColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
}


function onStopBtnClick() {
    startButton.removeAttribute('disabled');
    clearInterval(SwitcherTimerId);
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


