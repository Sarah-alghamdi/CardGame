function checkAnswers(){
    entredAnswer = document.querySelector('[name="clave1"]').value
    rightAnswer = "MR. AHMED IS THE BEST!!!" 
    rightAnswer2 ="SARAH IS THE BEST"

    if (entredAnswer.length === 0 || rightAnswer.length === 0) {
        alert("what is wrong with you !!...");
        return false;
    }

    if (entredAnswer === rightAnswer || entredAnswer === rightAnswer2) {
        alert("CONGRATULATIONS! Your answer is correct! You truly are the best!! (now give me the bonus)...");
        document.body.innerHTML += '<button onclick="window.location.href = \'https://i.pinimg.com/originals/12/35/ac/1235accd3c70528a8b178791ca496a5d.gif\';">Next Riddle</button>' 
        
    } else {
        alert("Opss, please focuse, I'm a kind person i'll give you a hint:caps lock (give me a bonus for my kindness)...");
    }
}