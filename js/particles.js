/* ==========================================
   PARTICLE BACKGROUND
   Shibin Jaison Portfolio
========================================== */

const canvas = document.getElementById("particles");

if(canvas){

const ctx = canvas.getContext("2d");

let particles = [];

let mouse = {

x:null,
y:null,
radius:120

};

function resize(){

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

}

resize();

window.addEventListener("resize",resize);

window.addEventListener("mousemove",(e)=>{

const rect = canvas.getBoundingClientRect();

mouse.x = e.clientX - rect.left;
mouse.y = e.clientY - rect.top;

});

window.addEventListener("mouseleave",()=>{

mouse.x = null;
mouse.y = null;

});

class Particle{

constructor(){

this.reset();

}

reset(){

this.x = Math.random()*canvas.width;
this.y = Math.random()*canvas.height;

this.size = Math.random()*3 + 1;

this.speedX = (Math.random()-0.5)*1;
this.speedY = (Math.random()-0.5)*1;

}

draw(){

ctx.beginPath();

ctx.arc(

this.x,
this.y,
this.size,
0,
Math.PI*2

);

ctx.fillStyle="rgba(0,229,255,0.8)";

ctx.fill();

}

update(){

this.x += this.speedX;
this.y += this.speedY;

if(this.x<0 || this.x>canvas.width){

this.speedX *= -1;

}

if(this.y<0 || this.y>canvas.height){

this.speedY *= -1;

}

if(mouse.x!=null){

const dx = this.x-mouse.x;
const dy = this.y-mouse.y;

const distance = Math.sqrt(dx*dx+dy*dy);

if(distance < mouse.radius){

this.x += dx*0.02;
this.y += dy*0.02;

}

}

this.draw();

}

}

const particleCount = 90;

for(let i=0;i<particleCount;i++){

particles.push(new Particle());

}

function connect(){

for(let a=0;a<particles.length;a++){

for(let b=a+1;b<particles.length;b++){

const dx = particles[a].x-particles[b].x;
const dy = particles[a].y-particles[b].y;

const distance = Math.sqrt(dx*dx+dy*dy);

if(distance<130){

ctx.strokeStyle=
"rgba(0,229,255,"+(1-distance/130)*0.25+")";

ctx.lineWidth=1;

ctx.beginPath();

ctx.moveTo(

particles[a].x,
particles[a].y

);

ctx.lineTo(

particles[b].x,
particles[b].y

);

ctx.stroke();

}

}

}

}

function animate(){

ctx.clearRect(

0,
0,
canvas.width,
canvas.height

);

particles.forEach(p=>p.update());

connect();

requestAnimationFrame(animate);

}

animate();

}