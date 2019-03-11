//Timer
let counter = -1;

function timer() {
    counter++;
    document.getElementById('timerId').innerHTML = counter;
    setTimeout("timer()", 1000);
}
timer();

document.documentElement.onkeydown = function (kodEsc) {
    if (!kodEsc) {
        kodEsc = window.event
    }
    if (kodEsc.keyCode == 27) {
        return counter = 0;
    }
};


function mouseOver() {
   timerHover = document.getElementById('timerId');
   function stop(pauseTime) {
        if (!pauseTime) return "null"
        return pauseTime.getElementById('timerId');
    } 
}









