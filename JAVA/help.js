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

    var x = document.getElementById("myDIV");
    var y = document.getElementById("main1");
    var z = document.getElementById("main2");
    if (x.style.display == "none") {
        x.style.display = "flex";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "flex";
        z.style.display = "flex";
    }

}

