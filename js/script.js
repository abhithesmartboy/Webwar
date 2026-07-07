window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".hero-video");
    if (video) {
        video.play().catch(() => {
            console.log("Autoplay blocked, muted video fallback");
        });
    }
});
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
gsap.from(".hero-content *", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "power3.out"
});
