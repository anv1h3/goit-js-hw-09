
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector("body");
let isActive = true;
let timerId = null;

startBtn.addEventListener('click', startColors);
stopBtn.addEventListener('click', stopColors);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
 

function startColors (){
if(isActive === true){
    timerId = setInterval(() => {
        bodyRef.style.backgroundColor = getRandomHexColor();  
        }, 1000)
        isActive = false;
        startBtn.disabled = true;
}
return;
    
}

function stopColors(){
    clearInterval(timerId)
    isActive = true;
    startBtn.disabled = false;

  }