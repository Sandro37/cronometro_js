const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const miliseconds = document.querySelector("#miliseconds");

// buttons
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

//variables
let minutesVar = 0;
let secondsVar = 0;
let milisecondsVar = 0;
let isPaused = false;

let interval;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    isPaused = false;
    interval = setInterval(() => {
        if (!isPaused) {
            milisecondsVar += 10;

            if (milisecondsVar === 1000) {
                secondsVar++;
                milisecondsVar = 0;
            }
            if (secondsVar === 60) {
                minutesVar++;
                secondsVar = 0;
            }

            minutes.textContent = formatTime(minutesVar);
            seconds.textContent = formatTime(secondsVar);
            miliseconds.textContent = formatMiliseconds(milisecondsVar);
        }
    }, 10)
    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}
function resumeTimer() {
    isPaused = false;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function resetTimer() {
    isPaused = true;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "none";
    startBtn.style.display = "block";

    minutesVar = 0;
    secondsVar = 0;
    milisecondsVar = 0;

    minutes.textContent = formatTime(minutesVar);
    seconds.textContent = formatTime(secondsVar);
    miliseconds.textContent = formatMiliseconds(milisecondsVar);
}


function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}