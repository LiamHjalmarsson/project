function clock () {
    let date = new Date();
    let hours = date.getHours();
    let minits = date.getMinutes();
    let secsounds = date.getSeconds();

    let clockDiv = document.getElementById("clock");

    let period = "AM"
    
    if (hours == 0) {
        hours = 12;
    } else if (hours >= 12) {
        period = "PM"
        hours -= 12
    } 

    hours = hours < 10 ? "0" + hours : hours;
    minits = minits < 10 ? "0" + minits : minits;
    secsounds = secsounds < 10 ? "0" + secsounds : secsounds;

    let time = `${hours} : ${minits} : ${secsounds} : ${period}`

    clockDiv.innerText = time
    setTimeout(clock, 1000);
}

clock();

function date () {
    let date = new Date();
    let dayDate = date.getDate();
    let monthDate = date.getMonth();
    let yearDate = date.getFullYear();

    let day = `${dayDate} / ${monthDate} / ${yearDate}`

    document.querySelector("#date").textContent = day;
}

date()