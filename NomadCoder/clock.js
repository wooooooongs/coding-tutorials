const clockContainer = document.querySelector('.js-clock');
const clocktitle = document.querySelector('.js-title');
const today = document.querySelector('.js-day');
const daytitle = document.querySelector('.js-daytitle');

function getTime(){
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    clocktitle.innerText = `${
        hh < 10 ? `0${hh}` : hh}:${
        mm < 10 ? `0${mm}` : mm}:${
        ss < 10 ? `0${ss}` : ss}`;
}
function getDay(){
    const date = new Date();
    const yy = date.getFullYear();
    const mo = date.getUTCMonth();
    const dd = date.getDay();

    daytitle.innerText = `Today is ${yy} ${mo} ${dd}`;
}
function init(){
    setInterval(getTime,1000);
    getDay();
}

init()