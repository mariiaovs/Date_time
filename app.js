const output = document.getElementById("output");

const fullBtn = document.getElementById("full");

const dateBtn = document.getElementById("date");

const timeBtn = document.getElementById("time");

let timeMode = "time";

update();

function update() {    
    output.textContent = formatTime(timeMode);
}

function formatTime(mode) {
    const now = new Date();
    switch (mode) {
        case "full":
            return now.toLocaleString();
        case "time":
            return now.toLocaleTimeString();
        case "date":
            return now.toLocaleDateString();
    }
}

setInterval(update, 1000);

function bindName(name) {       
        return function () {
            timeMode = name;
            update();
        }    
}

fullBtn.onclick = bindName("full");

dateBtn.onclick = bindName("date");

timeBtn.onclick = bindName("time");