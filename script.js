var frame = document.getElementById("main");
var talk = document.getElementById("talk");
var heart = document.getElementById("heart");
var main = document.getElementById("main");
var eyes = document.getElementById("eyes");
var tail = document.getElementById("tail");
var weapon = document.getElementById("weapon");

var con1 = document.getElementById("con1");
document.addEventListener('mousemove', function(e) {
    var mx = e.pageX;
    var my = e.pageY;
    var wid = frame.clientWidth;
    var hei = frame.clientHeight;

    x = (mx - wid / 2) / 20;
    y = (my - hei / 2) / 20;
    talk.style.transform = `translate(${x}px, ${y}px)`;

    x = (mx - wid / 2) / 40;
    y = (my - hei / 2) / 40;
    heart.style.transform = `translate(${x}px, ${y}px)`;

    x = (mx - wid / 2) / 60;
    y = (my - hei / 2) / 60;
    main.style.transform = `translate(${x}px, ${y}px)`;

    x = (mx - wid / 2) / 30;
    y = (my - hei / 2) / 30;
    tail.style.transform = `translate(${x}px, ${y}px)`;

    x = (mx - wid / 2) / 20;
    y = (my - hei / 2) / 20;
    weapon.style.transform = `translate(${x}px, ${y}px)`;

    x = (mx - wid / 2) / 40;
    y = (my - hei / 2) / 40;
    eyes.style.transform = `translate(${x}px, ${y}px)`;
});