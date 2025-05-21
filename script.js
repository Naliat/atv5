document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("show-menu");
});
