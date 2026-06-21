window.addEventListener("load", () => {
    console.log("Preloader js working");
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.classList.add("fade-out");
        setTimeout(() => {
            preloader.style.display = "none";
        },1000);
    },2500);
});