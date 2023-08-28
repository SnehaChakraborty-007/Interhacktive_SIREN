document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const inputText = document.getElementById("inputText").value;
        
        // Save the input text in session storage
        sessionStorage.setItem("submittedText", inputText);
        
        // Redirect to the next page
        window.location.href = "direct.html";
    });
});
let playbutton = document.getElementsByClassName("SIREN");
let text = Document.querySelector("p");
const audio = new Audio("./siren.mp3");
playbutton[0].addEventListener("click", (e)=>{
    audio.play();

}

function playSiren() {
  s.play();
}

