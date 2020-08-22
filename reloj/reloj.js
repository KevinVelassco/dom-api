const d = document;
export function clock(panelClock, btnStart, btnStop){
    let clockTempo;

    d.addEventListener("click", (e) => {
        if(e.target.matches(btnStart)){
            clockTempo = setInterval(() => {
                const clock = new Date().toLocaleTimeString();
                d.querySelector(panelClock).innerHTML = `<h3>${clock}</h3>`;
            }, 1000);
            //e.target.disabled = true;
            e.target.setAttribute("disabled", true);
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(panelClock).innerHTML = null;
            d.querySelector(btnStart).disabled = false;
        }
    })
}

export function alarm(sound, btnStart, btnStop){
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.setAttribute("src", sound);
    d.addEventListener("click", (e) => {
        if(e.target.matches(btnStart)){
            alarmTempo = setTimeout(() => $alarm.play(), 2000);
            e.target.setAttribute("disabled", true);
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnStart).disabled = false;
        }
    })
}