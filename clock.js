let clockHolder = document.querySelector("#clockHolder");
let modeimg = document.querySelector("#modeimg");
let clock = document.querySelector("#clock");

const HoursTic = document.querySelector(".hours");
const MiutsTic = document.querySelector(".miuts");
const seconTic = document.querySelector(".second");

const Time = () => {
    let date = new Date();
    let houre = date.getHours();
    let minut = date.getMinutes();
    let second = date.getSeconds();

    // console.log(`${houre}:${minut}:${second}`);

    let secDeg = second * 6;
    let minDeg = minut * 6;
    let houDeg = houre * 30;
    // console.log(houDeg);
    
    seconTic.style.transform = `rotate(${secDeg}deg)`;
    MiutsTic.style.transform = `rotate(${minDeg}deg)`;
    HoursTic.style.transform = `rotate(${houDeg}deg)`;

}

function myFunction() {
    setInterval(function(){
        Time();         
    }, 1000);
    }
    myFunction();

modeimg.addEventListener("click", () => {
    if ( clockHolder.className === "clockHolderW" && modeimg.className === "modeimgW" && clock.className === "clockW" ) {
        clockHolder.className = "clockHolderB"
        modeimg.className = "modeimgB"
        clock.className = "clockB"
    } else {
        clockHolder.className = "clockHolderW"
        modeimg.className = "modeimgW"
        clock.className = "clockW"
    }
});

console.log(clock.style);
