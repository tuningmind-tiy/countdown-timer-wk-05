const countdown = require('./countdown.js');


countdown()
countdown.log()
d = countdown.getDays()
h = countdown.getHours()
m = countdown.getMinutes()
s = countdown.getSeconds()

document.getElementById("days").textContent = d
document.getElementById("hours").textContent = h
document.getElementById("minutes").textContent = m
document.getElementById("seconds").textContent = s

