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

    if (x.style.display = 'flex') {
    y.style.display = 'none';
    z.style.display = 'none';
    }
    else if (x.style.display = 'none') {
        y.style.display = 'flex';
        z.style.display = 'flex';
        }

}

