let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let vSecond = document.getElementById("v_seconds");
let start = document.getElementById("startbtn");
let pause = document.getElementById("pausebtn");
let stopb = document.getElementById("stopbtn");
let sound = document.getElementsByTagName("audio")[0];

let vSec = 0;
let sec = 0;
let min = 0;
let hr = 0;
let interval = null;
pause.disabled = true;
stopb.disabled = true;
sound.loop = true

start.addEventListener("click", () => {
if (interval == null) {
    sound.play()
    pause.disabled = false;
    stopb.disabled = false;
    start.disabled = true;
    interval = setInterval( function () {
        vSec++;
    if (vSec >= 100) {
    vSec = 0; 
    sec++;
    } 
    if (sec >= 60) {
    sec = 0;
    min++;

    }
    if (min >= 60) {
    min = 0;
    hr++;
    }

    vSecond.innerText = `${vSec}`.padStart(2, '0')
    second.innerText = `${sec}`.padStart(2, '0')
    minute.innerText = `${min}`.padStart(2, '0')
    hour.innerText = `${hr}`.padStart(2, '0')
    
}, 10);
};
});

pause.addEventListener("click", () => {
    if (interval === null) {
        sound.play();
        pause.innerText = "Pause";
        interval = setInterval( function () {
            vSec++;
            if (vSec >= 100) {
            vSec = 0; 
            sec++;
            } ;

            if (sec >= 60) {
            sec = 0;
            min++;
            };

            if (min >= 60) {
            min = 0;
            hr++;
            };
        
            vSecond.innerText = `${vSec}`.padStart(2, '0');
            second.innerText = `${sec}`.padStart(2, '0');
            minute.innerText = `${min}`.padStart(2, '0');
            hour.innerText = `${hr}`.padStart(2, '0');
        }, 10);

    } else {
        sound.pause();
        pause.innerText = "Resume";
        clearInterval(interval);
        interval = null;
    };
});

stopb.addEventListener("click", () => {
    sound.pause();
    start.disabled = false;
    pause.disabled = true;
    stopb.disabled = true;
    vSec = 0;
    sec = 0;
    min = 0;
    hr = 0;
    clearInterval(interval);
    interval = null;
    pause.innerText = "Pause"
    hour.innerText = "00";
    minute.innerText = "00";
    second.innerText = "00";
    vSecond.innerText = "00";
})
