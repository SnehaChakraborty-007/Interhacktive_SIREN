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

function aud_play()
    {
        var myAudio= document.getElementById('myAudio');
        if(myAudio){
            myAudio.play();
        } 
    }
    



