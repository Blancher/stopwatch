// Variables

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Times

let ms = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let displayTimer = document.querySelector('#timer');

// Stopwatch

function stopWatch() {
    ms++;
    if (ms / 100 === 1) {
        ms = 0;
        seconds++;
    }
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    }
    if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
    }
    function addZeroes(time) {
        if ((`${time}0`).length > 2) {
            return time;
        } else {
            return `0${time}`;
        }
    }
    ms = addZeroes(ms);
    seconds = addZeroes(seconds);
    minutes = addZeroes(minutes);
    hours = addZeroes(hours);
    displayTimer.textContent = `${hours}:${minutes}:${seconds}:${ms}`;
}

// Event listeners

startStopBtn.addEventListener('click', () => {
    if (startStopBtn.textContent === 'Start') {
        interval = setInterval(stopWatch, 10);
        startStopBtn.textContent = 'Pause';
    } else if (startStopBtn.textContent === 'Pause') {
        clearInterval(interval);
        startStopBtn.textContent = 'Start';
    }
});
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    ms = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTimer.textContent = '00:00:00:00';
    startStopBtn.textContent = 'Start';
});
