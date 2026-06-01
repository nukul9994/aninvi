function openInvitation(){

document
.getElementById("envelope")
.classList.add("open");

setTimeout(() => {

document
.getElementById("welcome")
.style.display = "none";

document
.getElementById("invitation")
.style.display = "block";

}, 1700);
}

/* Flowers */

function createFlower(){

const flower =
document.createElement("div");

flower.classList.add("flower");

const icons = [
"🌸",
"🌺",
"🌷",
"💮"
];

flower.innerHTML =
icons[Math.floor(Math.random()*icons.length)];

flower.style.left =
Math.random()*100 + "vw";

flower.style.animationDuration =
(6 + Math.random()*6) + "s";

document
.getElementById("flowers")
.appendChild(flower);

setTimeout(()=>{
flower.remove();
},12000);
}

setInterval(createFlower,500);

/* Countdown */

const weddingDate =
new Date(
"January 24, 2027 19:00:00"
).getTime();

setInterval(()=>{

const now =
new Date().getTime();

const distance =
weddingDate - now;

const days =
Math.floor(distance /
(1000*60*60*24));

const hours =
Math.floor(
(distance %
(1000*60*60*24))
/
(1000*60*60)
);

const minutes =
Math.floor(
(distance %
(1000*60*60))
/
(1000*60)
);

const seconds =
Math.floor(
(distance %
(1000*60))
/
1000
);

document.getElementById(
"countdown"
).innerHTML =

`⏳ ${days} Days • ${hours} Hours • ${minutes} Minutes • ${seconds} Seconds`;

},1000);