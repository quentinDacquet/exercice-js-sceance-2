let btnStart = document.getElementById('start');
let btnStop = document.getElementById('stop');
let btnReset = document.getElementById('reset');
let span = document.getElementsByTagName("span");
let mlsec = 0;
let seconde = 0;
let minute = 0;
let heure = 0;

btnStart.onclick = start;

function start(){
    i=setInterval(update_chrono, 100);
}

function update_chrono(){
    mlsec += 100;
    if ( mlsec >= 900 && seconde < 59){
        seconde += 1;
        mlsec = 0;
    }
        else if ( mlsec > 900 && seconde >= 59 && minute < 59){
            minute += 1;
            seconde = 0;
            mlsec = 0;
        }
        else if ( mlsec > 900 && seconde > 59 && minute >= 59){
            heure += 1;
            minute =0;
            seconde = 0;
            mlsec = 0;
        }
        else {}
    
    
    span[0].innerHTML = heure + " hr";
    span[1].innerHTML = minute + " mn";
    span[2].innerHTML = seconde + " s";
    span[3].innerHTML = mlsec + " ms";
}

btnStop.onclick = stop;

function stop(){
    clearInterval(i);
}

btnReset.onclick = reset;

function reset(){
    clearInterval(i);
    mlsec = 0;
    seconde = 0;
    minute = 0;
    heure = 0;

    span[0].innerHTML = "0 hr";
    span[1].innerHTML = "0 mn";
    span[2].innerHTML = "0 s";
    span[3].innerHTML = "0 ms";
}
