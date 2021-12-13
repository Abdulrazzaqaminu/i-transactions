window.addEventListener("scroll", () => {
    let goals1 = document.querySelector(".services");
    let goals1Position = goals1.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(goals1Position < screenPosition){
        goals1.classList.add("active-goals");
    }
})
window.addEventListener("scroll", () => {
    let goals2 = document.querySelector(".why-we-started");
    let goals2Position = goals2.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(goals2Position < screenPosition){
        goals2.classList.add("active-why-we-started");
    }
})