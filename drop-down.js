const bars = document.querySelector(".navbar-bars");
const dropdown = document.querySelector(".navbar-container");
bars.addEventListener("click", () => {
    dropdown.classList.toggle("active")
})