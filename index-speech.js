responsiveVoice.speak("Good day. Welcome to i transactions. Press Enter key for more information");
window.addEventListener("keyup", e=>{
    if(e.keyCode === 13){
        var text = document.getElementById("intro").textContent;
        responsiveVoice.speak(text);
    }
})
