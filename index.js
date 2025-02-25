document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animasi saat halaman dimuat
    document.querySelectorAll("section").forEach(section => {
        section.style.opacity = 0;
        section.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
            section.style.opacity = 1;
        }, 500);
    });
});
