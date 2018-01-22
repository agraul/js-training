function updateClock() {
 if (seconds === true) {
   var slice_end = 8;
 } else {
   var slice_end = 5;
 }
var d = new Date();
var time_span = document.getElementById("time");
  time_span.innerHTML = d.toTimeString().slice(0, slice_end); 
  // date.toLocaleTimeString('de'); 
};

function updateDate() {
  var d  = new Date();
  date_span = document.getElementById("date");
  if (date === true) {
     date_span.innerHTML = d.toDateString();
  } else {
    date_span.innerHTML = "";
  }
}


function flipSeconds() {
  seconds = !seconds;
  updateClock();
}

function flipDate() {
  date = !date;
  updateDate();
}

let seconds = true;
let date = false
updateClock();
window.setInterval(updateClock, 1000);
window.setInterval(updateDate, 1000);

document.getElementById("sec_butt").onclick = flipSeconds;
document.getElementById("date_butt").onclick = flipDate;
