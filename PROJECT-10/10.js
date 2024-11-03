const displayTime=document.querySelector('.display');
const startBtn =document.querySelector('.start');
const resetBtn=document.querySelector('.reset');
const stopBtn=document.querySelector('.stop');
let s=0;
let m=0;
let h=0;
let timeInterval;


function start(){
    clearInterval(timeInterval);
    timeInterval=setInterval(updateTime,1000);
}

function stop(){
    clearInterval(timeInterval);
}

function reset(){
    clearInterval(timeInterval);
    h=0;
    m=0;
    s=0
    displayTime.innerHTML="00:00:00";
}

function updateTime(){
    s++;
    if(s===60){
        s=0;
        m++;
    }

    if(m===60){
        m=0;
        h++;
    }
    let displayHours = h < 10 ? "0" + h : h;
    let displayMinutes = m < 10 ? "0" + m : m;
    let displaySeconds = s < 10 ? "0" + s : s;
    displayTime.innerHTML=displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

startBtn.addEventListener('click',()=>{
    start();
});

stopBtn.addEventListener('click',()=>{
    stop();
})

resetBtn.addEventListener('click',()=>{
    reset();
})