"use strict"

function timingFunc() {
    const x = new Date();

    let seconds = x.getSeconds()
    if (seconds < 10) {
        seconds = `0${seconds}`
    }


    let minutes = x.getMinutes()
    if (minutes < 10) {
        minutes = `0${minutes}`

    }


    let hour = x.getHours()
    if (hour < 10) {


        hour = `0${hour}`
    }

    let container = document.querySelector(".apple-watch_container").innerHTML = `<p class="apple-watch_container_hours">${hour}<p>:</p>
    
    <p class="apple-watch_container_minutes">${minutes}</p> <p>:</p>
    
    <p class="apple-watch_container_secunds">
    ${seconds}</p>`
}


setInterval(timingFunc, 1000)

