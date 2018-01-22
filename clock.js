function updateClock() {
var date  = new Date();
var time_div = document.getElementById("time");
time_div.innerHTML = date.toLocaleTimeString('de');
/* or: date.toTimeString().slice(0,8); */
};

updateClock();
window.setInterval(updateClock,1000);
