const envelope=document.getElementById("envelope");

envelope.addEventListener("click",()=>{

envelope.classList.toggle("open");

});

const start=new Date("2024-09-09");

function updateCounter(){

const now=new Date();

const diff=now-start;

const days=Math.floor(diff/(1000*60*60*24));

document.getElementById("days").innerHTML=days+" zile ❤️";

}

updateCounter();

setInterval(updateCounter,60000);

function heart(){

const h=document.createElement("div");

h.className="floating-heart";

h.innerHTML=Math.random()>.5?"❤️":"💖";

h.style.left=Math.random()*100+"vw";

h.style.animationDuration=(5+Math.random()*5)+"s";

h.style.fontSize=(18+Math.random()*20)+"px";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},10000);

}

setInterval(heart,350);

function sparkle(){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*100+"vw";

s.style.bottom="-10px";

s.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},9000);

}

setInterval(sparkle,120);

function petal(){

const p=document.createElement("div");

p.className="petal";

p.innerHTML="🌸";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(8+Math.random()*6)+"s";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},15000);

}

setInterval(petal,500);

for(let i=0;i<40;i++){

setTimeout(heart,i*100);

}

for(let i=0;i<50;i++){

setTimeout(sparkle,i*80);

}

for(let i=0;i<20;i++){

setTimeout(petal,i*300);

}