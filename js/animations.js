/* ==========================================
   SHIBIN JAISON PORTFOLIO
   animations.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const revealElements = document.querySelectorAll(

        ".section-title, .about, .stat-box, .skill-card, .timeline-item, .project-card, .education-card, .certificate-card, .language-card, .interest-card, .contact"

    );

    function revealOnScroll() {

        revealElements.forEach((element) => {

            const top = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top < windowHeight - 80) {

                element.style.opacity = "1";
                element.style.transform = "translateY(0)";

            }

        });

    }

    revealElements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(60px)";
        element.style.transition = "all .8s ease";

    });

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    /* ==========================
       HERO FLOATING
    ========================== */

    const hero = document.querySelector(".hero-content");

    if(hero){

        let direction = 1;

        setInterval(()=>{

            hero.style.transform =
                `translateY(${direction*8}px)`;

            direction *= -1;

        },2500);

    }

    /* ==========================
       SKILL BAR ANIMATION
    ========================== */

    const progressBars =
        document.querySelectorAll(".progress span");

    function animateBars(){

        progressBars.forEach(bar=>{

            const width = bar.dataset.width ||
                          bar.style.width;

            bar.style.width="0";

            setTimeout(()=>{

                bar.style.width = width;

            },300);

        });

    }

    const skills =
        document.querySelector(".skills");

    if(skills){

        window.addEventListener("scroll",()=>{

            const top =
            skills.getBoundingClientRect().top;

            if(top < window.innerHeight-100){

                animateBars();

            }

        });

    }

    /* ==========================
       CARD TILT EFFECT
    ========================== */

    const cards = document.querySelectorAll(

        ".project-card,.skill-card,.education-card,.certificate-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX-rect.left;

            const y =
                e.clientY-rect.top;

            const rotateY =
                ((x/rect.width)-0.5)*12;

            const rotateX =
                ((0.5-y/rect.height))*12;

            card.style.transform=
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform=
            "perspective(900px) rotateX(0) rotateY(0)";

        });

    });

    /* ==========================
       PARALLAX HERO
    ========================== */

    window.addEventListener("scroll",()=>{

        const scroll = window.pageYOffset;

        document.querySelector(".hero")
        .style.backgroundPositionY =
        scroll*0.5+"px";

    });

    /* ==========================
       NAVBAR ANIMATION
    ========================== */

    const nav =
        document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>60){

            nav.style.padding="12px 0";

        }

        else{

            nav.style.padding="20px 0";

        }

    });

    /* ==========================
       BUTTON RIPPLE
    ========================== */

    const buttons =
        document.querySelectorAll(".btn,.btn2");

    buttons.forEach(button=>{

        button.addEventListener("click",function(e){

            const circle =
                document.createElement("span");

            const diameter =
                Math.max(

                    this.clientWidth,
                    this.clientHeight

                );

            circle.style.width =
                circle.style.height =
                diameter+"px";

            circle.style.left =
                e.offsetX-diameter/2+"px";

            circle.style.top =
                e.offsetY-diameter/2+"px";

            circle.classList.add("ripple");

            this.appendChild(circle);

            setTimeout(()=>{

                circle.remove();

            },600);

        });

    });

    /* ==========================
       STAGGER ANIMATION
    ========================== */

    const grids =
        document.querySelectorAll(

            ".skill-card,.project-card,.interest-card"

        );

    grids.forEach((item,index)=>{

        item.style.animationDelay =
            `${index*120}ms`;

    });

});