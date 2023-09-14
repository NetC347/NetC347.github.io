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

    var x = document.getElementById("warn");
    var y = document.getElementById("links");
    var z = document.getElementById("pad");

    x.style.display = 'none';
    x.style.display = 'flex';
    x.style.display = 'flex';
    

}

