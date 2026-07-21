/* ==========================================
   SHIBIN JAISON PORTFOLIO
   cursor.js
========================================== */

const cursor = document.getElementById("cursor");

// Stop if cursor element doesn't exist
if (!cursor) {
    console.warn("Cursor element not found.");
} else {

    // Disable custom cursor on touch devices
    if (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
    ) {
        cursor.style.display = "none";
    } else {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        const speed = 0.18;

        /* ==========================
           Mouse Position
        ========================== */

        document.addEventListener("mousemove", (e) => {

            mouseX = e.clientX;
            mouseY = e.clientY;

        });

        /* ==========================
           Smooth Cursor Animation
        ========================== */

        function animateCursor() {

            currentX += (mouseX - currentX) * speed;
            currentY += (mouseY - currentY) * speed;

            cursor.style.left = currentX + "px";
            cursor.style.top = currentY + "px";

            requestAnimationFrame(animateCursor);

        }

        animateCursor();

        /* ==========================
           Click Animation
        ========================== */

        document.addEventListener("mousedown", () => {

            cursor.style.transform =
                "translate(-50%,-50%) scale(.65)";

            cursor.style.background = "#6C63FF";

        });

        document.addEventListener("mouseup", () => {

            cursor.style.transform =
                "translate(-50%,-50%) scale(1)";

            cursor.style.background = "#00E5FF";

        });

        /* ==========================
           Hover Effects
        ========================== */

        const hoverElements = document.querySelectorAll(

            "a, button, input, textarea, .btn, .btn2, .logo, .project-card, .skill-card, .education-card, .certificate-card, .interest-card, .language-card, .stat-box"

        );

        hoverElements.forEach((element) => {

            element.addEventListener("mouseenter", () => {

                cursor.style.width = "55px";
                cursor.style.height = "55px";
                cursor.style.border = "2px solid #00E5FF";
                cursor.style.background =
                    "rgba(0,229,255,.12)";
                cursor.style.boxShadow =
                    "0 0 30px rgba(0,229,255,.8)";
                cursor.style.mixBlendMode = "screen";

            });

            element.addEventListener("mouseleave", () => {

                cursor.style.width = "20px";
                cursor.style.height = "20px";
                cursor.style.border = "none";
                cursor.style.background = "#00E5FF";
                cursor.style.boxShadow =
                    "0 0 15px #00E5FF";

            });

        });

        /* ==========================
           Hide Cursor
        ========================== */

        document.addEventListener("mouseleave", () => {

            cursor.style.opacity = "0";

        });

        document.addEventListener("mouseenter", () => {

            cursor.style.opacity = "1";

        });

        /* ==========================
           Cursor Trail Effect
        ========================== */

        document.addEventListener("mousemove", (e) => {

            const dot = document.createElement("span");

            dot.className = "cursor-trail";

            dot.style.left = e.clientX + "px";
            dot.style.top = e.clientY + "px";

            document.body.appendChild(dot);

            setTimeout(() => {

                dot.remove();

            }, 500);

        });

    }

}