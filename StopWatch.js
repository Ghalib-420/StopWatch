
let [milliseconds,second,minute,] = [0,0,0];
let timerRef = document.querySelector('.mainTime');
let int = null;

document.getElementById('start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(mainTime,10);
});

document.getElementById('stop').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('reset').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,second,minute] = [0,0,0];
    timerRef.innerHTML = '00 : 00 : 00';
});

/* to increament the time in the watch */

function mainTime(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        second++;
        if(second == 60){
            second = 0;
            minute++;
            if(minute == 60){
                minute = 0;
            }
        }
    }


    /* to add 0 in the timer if time is single digit */
 let m = minute < 10 ? "0" + minute : minute;
 let s = second < 10 ? "0" + second : second;
 let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;
}