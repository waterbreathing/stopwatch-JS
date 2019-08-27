
const startBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
let displayInfo = document.querySelector('div.time div');


let a = 0;
let hunSec = 0;
let seconds = 0;
let timer = 0;
//indeks setInterval

let status = 0;
//0 start 1 pauza
//flaga de facto, można też było true/false zrobic

function convert() {


    if (a < 100) {

        a < 10 ? a = '0' + a : a;
        hunSec = a;

    } else {
        if (a % 100 == 0) hunSec = '0' + 0;
        a = 0;
        seconds++;

    }
    a++;

    displayInfo.textContent = `${seconds}:${hunSec}`;

}



function start() {
    if (status == 0) {
        status = 1;
        startBtn.textContent = 'Pause';
        timer = setInterval(convert, 10);
    } else {
        clearInterval(timer);
        status = 0;
        startBtn.textContent = 'Start';
    }

}

function reset() {
    clearInterval(timer);
    displayInfo.textContent = '---';
    a = 0;
    hunSec = 0;
    seconds = 0;
    startBtn.textContent = 'Start';
    status = 0;

}



startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset);