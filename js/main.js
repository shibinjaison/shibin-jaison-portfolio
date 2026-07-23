/* ==========================================
   SHIBIN JAISON PORTFOLIO
   main.js
========================================== */

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.8s";

    }, 1200);

});


/* ==========================
   TYPING EFFECT
========================== */

const typingElement = document.querySelector(".typing");

const roles = [

    "AI & ML Engineer",
    "Computer Vision Engineer",
    "Python Developer",
    "Robotics Enthusiast",
    "Deep Learning Engineer",
    "Human Computer Interaction"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const current = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            current.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === current.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingElement.textContent =
            current.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);

}

typeEffect();


/* ==========================
   STICKY HEADER
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background =
            "rgba(5,8,22,.90)";

        header.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.35)";

    }

    else {

        header.style.background =
            "rgba(5,8,22,.55)";

        header.style.boxShadow = "none";

    }

});


/* ==========================
   ACTIVE NAV LINK
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================
   SCROLL TO TOP
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function runCounters(){

if(counterStarted) return;

counterStarted = true;

counters.forEach(counter=>{

const original = counter.innerText;

const number =
parseInt(original.replace(/\D/g,"")) || 0;

const suffix =
original.replace(/[0-9]/g,"");

let count = 0;

const increment = Math.max(1, Math.ceil(number/100));

const update = ()=>{

count += increment;

if(count >= number){

counter.innerText = original;

}

else{

counter.innerText = count + suffix;

requestAnimationFrame(update);

}

};

update();

});

}

window.addEventListener("scroll",()=>{

const stats = document.querySelector(".stats");

if(!stats) return;

const top = stats.getBoundingClientRect().top;

if(top < window.innerHeight-100){

runCounters();

}

});


/* ==========================
   FADE ANIMATION
========================== */

const revealElements =
document.querySelectorAll(

".skill-card,.project-card,.education-card,.certificate-card,.timeline-item,.interest-card,.language-card"

);

function reveal(){

revealElements.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight-80){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();


/* ==========================
   CONTACT FORM
========================== */

const form = document.querySelector(".contact-form form");

if (form) {
    form.addEventListener("submit", () => {
        setTimeout(() => {
            alert("Thank you for contacting me!\n\nI'll get back to you soon.");
        }, 500);
    });
}

/* ==========================
   FOOTER YEAR
========================== */

const copyright =
document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
`© ${new Date().getFullYear()} Shibin Jaison. All Rights Reserved.`;

}


/* ==========================
   PRELOAD ANIMATIONS
========================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/* ==========================
   MOBILE MENU
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

    });

}
/* ==========================================
   END OF FILE
========================================== */
