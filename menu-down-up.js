const menu = document.querySelector(".navbar-container");
window.addEventListener("keyup", e => {
    console.log(e);
    if(e.keyCode === 40){
        menu.classList.add("down");
    }
    else if(e.keyCode === 38){
        menu.classList.remove("down");
    }
    else if(e.keyCode === 39){
        
    }
})