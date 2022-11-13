// Variables

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Times

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let displayTimer = document.querySelector('#timer');

// Stopwatch

function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    }
    if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
    }
    function addZeroes(time) {
        const wordTime = time.toString();
        if ((wordTime + '0').length > 2) {
            return wordTime;
        } else {
            return '0' + wordTime;
        }
    }
    seconds = addZeroes(seconds);
    minutes = addZeroes(minutes);
    hours = addZeroes(hours);
    displayTimer.textContent = hours + ":" + minutes + ":" + seconds;
}

// Event listeners

startStopBtn.addEventListener('click', () => {
    if (startStopBtn.textContent === 'Start') {
        interval = setInterval(stopWatch, 1000);
        startStopBtn.textContent = 'Pause';
    } else if (startStopBtn.textContent === 'Pause') {
        clearInterval(interval);
        startStopBtn.textContent = 'Start';
    }
});
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTimer.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
});