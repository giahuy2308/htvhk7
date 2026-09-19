const openButton1 = document.getElementById("open-project1");
const openButton2 = document.getElementById("open-project2");

const modal1 = document.getElementById("project-modal1");
const modal2 = document.getElementById("project-modal2");

const closeButton1 = document.getElementById("close-modal1");
const closeButton2 = document.getElementById("close-modal2");

const themeToggle = document.getElementById("theme-toggle");


openButton1.addEventListener("click", () => {
    modal1.classList.add("show");
});


closeButton1.addEventListener("click", () => {
    modal1.classList.remove("show");
});

openButton2.addEventListener("click", () => {
    modal2.classList.add("show");
});


closeButton2.addEventListener("click", () => {
    modal2.classList.remove("show");
});



themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});