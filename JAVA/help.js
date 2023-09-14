window.addEventListener("load", (event) => {
    getTime()
});

setInterval(getTime, 1000);

function getTime() {
    const options = {
        hourCycle: "h12",
        timeStyle: "short"
    };
    var realtime = new Date().toLocaleString(navigator.languages[0], options);
    document.getElementById('time').innerText = realtime;
}

function myClick() {
    var warn = document.getElementById("myDIV");
    hide(document.getElementById("main1"));
    hide(document.getElementById("main2"));



    if (warn.style.display == "none") {
        pad.style.display = "block";
        link.style.display = "block";
    }
    else {
        warn.style.display = "block";
    }
}
