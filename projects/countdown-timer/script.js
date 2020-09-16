let headerMain = document.querySelector("#header-main");
let dayCount = document.querySelector("#day-count");
let hourCount = document.querySelector("#hour-count");
let minCount = document.querySelector("#min-count");
let secCount = document.querySelector("#sec-count");  
const countDownDate = "1 Jan 2021";
const headingData = "Happy New Year";

const formatCount = (count) => `${`${count}`.length < 2 ? 0 : ''}${count}`;

const execute = () => {
    let todayDate = new Date();
    let diffDate = new Date(countDownDate) - todayDate;
    let seconds = Math.floor(diffDate/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);
    secCount.textContent = formatCount(seconds % 60);
    minCount.textContent = formatCount(minutes % 60);
    hourCount.textContent = formatCount(hours % 24);
    dayCount.textContent = formatCount(days);
}
headerMain.textContent = headingData;
execute();
setInterval(execute, 1000);
