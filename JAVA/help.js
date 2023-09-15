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


    if ( popup.style.display = "none"); {
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

function ran_col() { //function name
    var color; // hexadecimal starting symbol
    var letters = ['01007a','7a003c','797a00','007a3e','00797a']; //Set your colors here

    var x= document.getElementsByClassName("barc");
    var i;
    for(i=0;i<x.length;i++)
    {
        color="#";
        color += letters[Math.floor(Math.random() * letters.length)];
        x[i].style.backgroundColor = color;
    }
    document.getElementById("page").style.display = "block";
}

function ran_coloff() {


    
}