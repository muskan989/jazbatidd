
function startCountdown(durationInSeconds) {
    let endTime = Date.now() + durationInSeconds * 1000;
    
    function updateClock() {
        let remainingTime = endTime - Date.now();
        if (remainingTime <= 0) {
            document.getElementById("clockdiv-1").innerHTML = "Time's Up!";
            return;
        }
        let seconds = Math.floor((remainingTime / 1000) % 60);
        let minutes = Math.floor((remainingTime / 1000 / 60) % 60);
        let hours = Math.floor((remainingTime / 1000 / 60 / 60) % 24);
        let days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
        
        document.querySelector(".days").textContent = days;
        document.querySelector(".hours").textContent = hours;
        document.querySelector(".minutes").textContent = minutes;
        document.querySelector(".seconds").textContent = seconds;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

startCountdown(05 * 60 * 60 + 00 * 60 + 00); // Example countdown tim