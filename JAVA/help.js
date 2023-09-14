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
    var link = document.getElementById("myDIV");
    var main1 = document.getElementById("main1");
    var main1 = document.getElementById("main2");

    if (link.style.display == "none") {
        main1.style.display = "flex";
        main1.style.display = "flex";
    }
    else {
        link.style.display = "flex";
        main1.style.display = "none";
        main1.style.display = "none";
    }
}
