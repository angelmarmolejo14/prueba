// Efecto de aparición al hacer scroll
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade-in");
    const scrollY = window.scrollY + window.innerHeight;

    elements.forEach((element) => {
        if (scrollY > element.offsetTop + element.clientHeight / 2) {
            element.classList.add("visible");
        }
    });
});

// Efecto para resaltar enlace activo en la barra de navegación
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelectorAll("nav a").forEach((el) => el.classList.remove("active"));
        link.classList.add("active");
    });
});

// Efecto de hover para ampliar la imagen
const imageContainer = document.querySelector(".image-container img");
imageContainer.addEventListener("mouseenter", () => {
    imageContainer.classList.add("zoom");
});
imageContainer.addEventListener("mouseleave", () => {
    imageContainer.classList.remove("zoom");
});
