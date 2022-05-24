// Define Variables
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;


// function Start
let start = () => {
    timer = true;
    stopwatch();
}
// function Stop
let stop = () => {
    timer = false;
}
// function Reset
let reset = () => {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}
//Funtion Stop Watch
let stopwatch = () => {
    if (timer == true) {
        count = count + 1;
        //For Count
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        //For Sec
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        //For Hours
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        hrString = hr;
        minString = min;
        secString = sec;
        countString = count;
        //For Hours
        if(hr < 10){
            hrString = "0" + hrString;
        }
        //For Min
        if(min < 10){
            minString = "0" + minString;
        }
        //For Sec
        if(sec < 10){
            secString = "0" + secString;
        }
        //For Count
         if(count < 10){
            countString = "0" + countString;
        }

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        setTimeout("stopwatch()", 10);
    }
}