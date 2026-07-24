/* ==========================================
   SHIBIN JAISON PORTFOLIO
   main.js
   PART 1
   Loader • Typing • Header • Navigation
========================================== */


/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.transition = "0.8s";

        }, 1200);

    }

});


/* ==========================
   TYPING EFFECT
========================== */

const typingElement = document.querySelector(".typing");

const roles = [

    "AI & Machine Learning Engineer",

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

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

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

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,8,22,.92)";
        header.style.backdropFilter = "blur(10px)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(5,8,22,.55)";
        header.style.backdropFilter = "blur(8px)";
        header.style.boxShadow = "none";

    }

});


/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        const sectionHeight = section.offsetHeight;

        if (

            window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight

        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") === "#" + currentSection

        ) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});
/* ==========================================
   SHIBIN JAISON PORTFOLIO
   main.js
   PART 2
   Scroll Top • Counter • Reveal Animation
========================================== */


/* ==========================
   SCROLL TO TOP
========================== */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.opacity = "1";
            topBtn.style.visibility = "visible";
            topBtn.style.pointerEvents = "auto";

        } else {

            topBtn.style.opacity = "0";
            topBtn.style.visibility = "hidden";
            topBtn.style.pointerEvents = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function animateCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const original = counter.innerText;

        const number = parseInt(original.replace(/\D/g, "")) || 0;

        const suffix = original.replace(/[0-9]/g, "");

        let count = 0;

        const increment = Math.max(

            1,

            Math.ceil(number / 100)

        );

        function updateCounter() {

            count += increment;

            if (count >= number) {

                counter.innerText = original;

            }

            else {

                counter.innerText = count + suffix;

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();

    });

}


/* ==========================
   START COUNTERS WHEN VISIBLE
========================== */

const statsSection = document.querySelector(".stats");

if (statsSection) {

    const counterObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounters();

                }

            });

        },

        {

            threshold: 0.35

        }

    );

    counterObserver.observe(statsSection);

}


/* ==========================
   REVEAL ANIMATION
========================== */

const revealElements = document.querySelectorAll(

    ".skill-card," +
    ".project-card," +
    ".education-card," +
    ".certificate-card," +
    ".timeline-item," +
    ".interest-card," +
    ".language-card," +
    ".stat-box," +
    ".tech-grid span"

);

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition =

        "opacity .8s ease, transform .8s ease";

});


const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =

                    "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {

        threshold: 0.15

    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ==========================
   PARALLAX HERO
========================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    hero.style.backgroundPositionY =

        window.scrollY * 0.35 + "px";

});


/* ==========================
   BUTTON RIPPLE EFFECT
========================== */

document.querySelectorAll(".btn,.btn2").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const submitBtn = contactForm.querySelector("button");
        const originalText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                contactForm.reset();

                submitBtn.innerHTML =
                    '<i class="fa-solid fa-check"></i> Sent Successfully';

                alert(
                    "✅ Thank you!\n\nYour message has been sent successfully.\nI'll get back to you as soon as possible."
                );

                setTimeout(() => {

                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;

                }, 2500);

            } else {

                throw new Error("Submission failed");

            }

        } catch (error) {

            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            alert("❌ Unable to send your message.\nPlease try again later.");

        }

    });

}


/* ==========================
   FOOTER YEAR
========================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* ==========================
   PAGE LOADED CLASS
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================
   MOBILE MENU
========================== */

document.querySelectorAll(".btn, .btn2").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-3px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});

const progressBar = document.createElement("div");

progressBar.id = "scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width =
        (scrollTop / scrollHeight) * 100 + "%";

});

/* ==========================================
   SHIBIN JAISON PORTFOLIO
   main.js
   PART 4
   Mobile Menu • Utilities • Final
========================================== */


/* ==========================
   MOBILE MENU
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* ==========================
   CLOSE MENU AFTER CLICK
========================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (!navMenu) return;

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ==========================
   CLOSE MENU ON OUTSIDE CLICK
========================== */

document.addEventListener("click", (e) => {

    if (!menuToggle || !navMenu) return;

    if (

        !menuToggle.contains(e.target) &&
        !navMenu.contains(e.target)

    ) {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* ==========================
   ESC KEY CLOSE MENU
========================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        if (!menuToggle || !navMenu) return;

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* ==========================
   IMAGE LAZY LOADING
========================== */

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("loading", "lazy");

});


/* ==========================
   REMOVE FOCUS AFTER CLICK
========================== */

document.querySelectorAll("button,a").forEach(element => {

    element.addEventListener("mouseup", function () {

        this.blur();

    });

});


/* ==========================
   WINDOW RESIZE
========================== */

window.addEventListener("resize", () => {

    if (

        window.innerWidth > 992 &&
        navMenu &&
        menuToggle

    ) {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* ==========================
   DISABLE RIGHT CLICK
   (Optional)
========================== */

/*

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});

*/


/* ==========================
   DISABLE DRAGGING IMAGES
========================== */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("dragstart", e => {

        e.preventDefault();

    });

});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(

"%cShibin Jaison Portfolio",

"color:#00d9ff;font-size:22px;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Shibin Jaison",

"color:#ffffff;font-size:14px;"

);


/* ==========================
   PERFORMANCE
========================== */

window.addEventListener(

    "scroll",

    () => {},

    { passive: true }

);


/* ==========================
   END OF FILE
========================== */

console.log("Portfolio Loaded Successfully.");
