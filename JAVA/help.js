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
    function myClick() {
        var warn = document.getElementById("myDIV");
        var main1 = document.getElementById("main1");
        var main2 = document.getElementById("main2");
    
        when (warn.style.display === "none") {
            main1.style.display = "block";
            main2.style.display = "block";
          }
        }