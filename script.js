let speech= new SpeechSynthesisUtterance();
let voices=[];
let voiceSelect=    document.querySelector("select");

window.speechSynthesis.onvoiceschanged= () => {
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    
    voiceSelect.innerHTML='';
    voices.forEach((voice,i) => (voiceSelect.options[i]=new Option(voice.name,i)));
};
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
})
document.querySelector("button").addEventListener("click",()=>{
    // Cancel previous voices request
    window.speechSynthesis.cancel();
    speech.text=document.querySelector("textarea").value;
// Ensure a voice is selected
    if (speech.voice) {
        window.speechSynthesis.speak(speech);
    } else {
        alert("No voice selected or available. Please try again.");
    }
   
});
