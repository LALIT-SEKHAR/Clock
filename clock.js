    const HoursTic = document.querySelector(".hours");
    const MiutsTic = document.querySelector(".miuts");
    const seconTic = document.querySelector(".second");

    const clockHolder = document.querySelector(".clockHolder");
    const clock = document.querySelector(".clock");

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
    // // Switching theme-------------------|

    // let whiteColor = true;

    // const togglemethod = () => {
    //     console.log("in loop obj..");
    //     if ( whiteColor === true) {
    //         console.log("white..");
    //         lightmode();
    //         whiteColor = false;  
    //     } else if (whiteColor === false) {
    //         console.log("dark..");
    //         darkmode();
    //         whiteColor = true;
    //     }
    // }
    // // for light mode
    // let lightmode = () => {
    //     clockHolder.style.backgroundColor = "rgb(201, 201, 201)";
    //     clockHolder.style.color = "black";
    //     console.log("white is working..");
        
    //     clock.style.boxShadow= "-8px -8px 9px rgb(255, 255, 255),8px 8px 9px rgb(119,119,119),inset -8px -8px 9px rgb(255, 255, 255),inset 8px 8px 9px rgb(117, 117, 117)";
    // }

    // // for dark mode
    // let darkmode = () => {
    //     clockHolder.style.backgroundColor = "rgb(30, 30, 30)";
    //     clockHolder.style.color = "white";
    //     console.log("dark is working..");
    //     clock.style.boxShadow= "-8px -8px 9px rgb(60, 60, 60),8px 8px 9px rgb(0, 0, 0),inset -8px -8px 9px rgb(60, 60, 60),inset 8px 8px 9px rgb(0, 0, 0);";
    // }
    // // Switching theme end--------------|



    function myFunction() {
        setInterval(function(){
            Time();         
        }, 1000);
        }
        myFunction();