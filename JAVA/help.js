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

var warn = document.getElementById('myDIV');
var link = document.getElementById('main1');
var pad = document.getElementById('main2');

warn.onclick = function() {
    warn.setAttribute('class', 'hidden');
    link.setAttribute('class', 'visible');
    pad.setAttribute('class', 'visible');
}
