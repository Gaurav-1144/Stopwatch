var hr = 0;
var min=0;
var sec=0;
var count=0;
var timer=false;
function resetWatch(){
    timer=false;
    clearTimeout('stopWatch()');
    hr = 0;
    min=0;
    sec=0;
    count=0;
    document.getElementById('hr').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('count').innerHTML="00";
}

function startWatch(){
    timer = true;
    startTimer(); 
}

function stopWatch(){
    timer = false;
}

function startTimer(){
    if (timer == true){
        console.log("called");
    var secString = sec; 
    var countString = count;
    var minString = min;
    var hrString = hr;
    if (hr < 10) {
        hrString = "0"+hrString;
    }
    if (sec < 10) {
        secString = "0"+secString;
    }
    if (min < 10) {
        minString = "0"+minString;
    }
    if (count < 10) {
        countString = "0"+countString;
    }
    count = count+1;
    if (count == 100) {
      sec = sec+1;
      count = 0;
      
    }
    if (sec == 60){
        min = min+1;
        sec=0;
    }
    if (min==60){
        hr = hr+1;
        min=0;
        sec=0;
    }
    document.getElementById('hr').innerHTML=hrString;
    document.getElementById('min').innerHTML=minString;
    document.getElementById('sec').innerHTML=secString;
    document.getElementById('count').innerHTML=countString;
     setTimeout('startTimer()',10);
}
}