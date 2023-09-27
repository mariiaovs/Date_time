const output = document.getElementById("output");

const fullBtn = document.getElementById("full");

const dateBtn = document.getElementById("date");

const timeBtn = document.getElementById("time");

let btnIsOn = false;

setInterval(function () {

    const now = new Date();
    if (!btnIsOn) {
        output.innerHTML = now.toLocaleString();
    } else output.innerHTML = formatTime(now);

}, 1000);


fullBtn.onclick = () => {
    btnIsOn = true;
    formatTime = function (time) {
        return time.toLocaleString();
    }
}

dateBtn.onclick = () => {
    btnIsOn = true;
    formatTime = function (time) {
        return time.toLocaleDateString();
    }
}

timeBtn.onclick = () => {
    btnIsOn = true;
    formatTime = function (time) {
        return time.toLocaleTimeString();
    }
}
