
const start = document.getElementById('start');
const stopBtn = document.getElementById('stop');
let interval;

function handleClick(event) {
    
    if (event.target.hasAttribute("data-start")) {
       interval = setInterval(changeBackground, 1000);
       start.disabled = true;
       start.style.opacity = '0.5';
       start.style.pointerEvents = 'none';

     
 
    } else {
         clearInterval(interval);
         start.disabled = false;
         start.style.opacity = '1';
         start.style.pointerEvents = 'auto';
      
 
      
    }
}
function changeBackground(){
    document.body.style.backgroundColor = getRandomHexColor();
}
start.addEventListener('click',handleClick);
stopBtn.addEventListener('click',handleClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

