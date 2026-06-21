window.addEventListener("load", () => {
    console.log("Preloader js working");
    const preloader = document.getElementById("preloader");
    window.scrollTo(0,0);
    setTimeout(() => {
        preloader.classList.add("fade-out");
        setTimeout(() => {
            preloader.style.display = "none";
        },1000);
    },2500);
});
