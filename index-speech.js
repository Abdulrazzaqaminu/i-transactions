responsiveVoice.speak("Welcome to i transactions. Press Enter key for more information and press arrow down key for the navigation bar");
window.addEventListener("keyup", e=>{
    if(e.keyCode === 13){
        var text = document.getElementById("intro").textContent;
        responsiveVoice.speak(text);
    }
})
