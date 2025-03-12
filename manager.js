const { JSDOM } = require("jsdom");
const { window } = new JSDOM(`<!DOCTYPE html><body></body>`);
const { document } = window;

// Scroll Animation for Features Section
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on page load in case elements are already in view

    const getStartedBtn = document.getElementById("get-started-btn");
    const modal = document.getElementById("social-modal");
    const closeBtn = document.querySelector(".close-btn");

    getStartedBtn.addEventListener("click", function () {
        window.location.href = "connect.html";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
