responsiveVoice.speak("This is the about page. click the enter for more information. ps.(this is onlu for laptop users)");
window.addEventListener("keyup", e=>{
    if(e.keyCode === 13){
        var text = document.getElementById("goals-speech").textContent;
        responsiveVoice.speak(text);
    }
})