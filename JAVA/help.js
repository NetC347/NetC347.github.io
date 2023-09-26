const popup = document.getElementById("warn");
var y = document.getElementById("links");
var z = document.getElementById("pad");

var a = document.getElementById("bg1");
var b = document.getElementById("bg2");
var c = document.getElementById("bg3");
var d = document.getElementById("bg4");
var e = document.getElementById("bg5");


if (document.cookie == '' || document.cookie == 'cookie=appear') {
    popup.style.display = "flex";
}

function myClick() {

    popup.style.display = 'none';


    if (popup.style.display = "none"); {
        y.style.display = 'flex';
        z.style.display = 'flex';

        a.style.display = 'flex';
        b.style.display = 'flex';
        c.style.display = 'flex';
        d.style.display = 'flex';
        e.style.display = 'flex';

        document.cookie = "cookie=notappear";
    }

}

$(document).ready(function () {
    $("#page1").click(function () {
        $("#albumgrid1").css('display', 'grid');
        $("#albumgrid2").hide();
        $("#albumgrid3").hide();
        $("#albumgrid4").hide();
        console.log("p1");
    })

    $("#page2").click(function () {
        $("#albumgrid1").hide();
        $("#albumgrid2").css('display', 'grid');
        $("#albumgrid3").hide();
        $("#albumgrid4").hide();
    })

    $("#page3").click(function () {
        $("#albumgrid1").hide();
        $("#albumgrid2").hide();
        $("#albumgrid3").css('display', 'grid');
        $("#albumgrid4").hide();
    })

    $("#page4").click(function () {
        $("#albumgrid1").hide();
        $("#albumgrid2").hide();
        $("#albumgrid3").hide();
        $("#albumgrid4").css('display', 'grid');
    })
});

$(document).ready(function () {
    $("#aesth1").click(function () {
        $("#aesthgrid1").css('display', 'grid');
        $("#aesthgrid2").hide();
    
        console.log("p1");
    })

    $("#aesth2").click(function () {
        $("#aesthgrid1").hide();
        $("#aesthgrid2").css('display', 'grid');
        
    })

});