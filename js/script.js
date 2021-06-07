// Define Variable
let correct_ans = Math.floor(Math.random() * 10 + 1);
let chances = 3;

// Define UI
let guessNumber = document.querySelector("#guess-number");
let enterBtn = document.querySelector("#enter-btn");
let restartBtn = document.querySelector("#restart-btn");
let guessForm = document.querySelector("#guess-form");
let alert = document.querySelector("#alert");
let totalChance = document.querySelector("#total-chance");
totalChance.innerText = chances;

// Define Functions
let checkAns = (e) => {
    if (chances !== 1) {
        if (parseInt(guessNumber.value) === correct_ans) {
            alert.innerText = "You Win";
            guessNumber.value = "";
            guessNumber.disabled = true;
            enterBtn.disabled = true;
        } else if (parseInt(guessNumber.value) > correct_ans) {
            alert.innerText = "Correct answer is smaller!";
            guessNumber.value = "";
            chances--;
            totalChance.innerText = chances;
        } else if (parseInt(guessNumber.value) < correct_ans) {
            alert.innerText = "Correct answer is greater!";
            guessNumber.value = "";
            chances--;
            totalChance.innerText = chances;
        } else {
            alert.innerText = "Wrong Input!";
            guessNumber.value = "";
            chances--;
            totalChance.innerText = chances;
        };

    } else {
        totalChance.innerText = 0;
        alert.innerText = "You lose!";
        guessNumber.value = "";
        guessNumber.disabled = true;
        enterBtn.disabled = true;
    };

    e.preventDefault();
};

let restartGame = (e) => {
    correct_ans = Math.floor(Math.random() * 10 + 1);
    chances = 3;
    totalChance.innerText = chances;
    alert.innerText = "";
    guessNumber.value = "";
    guessNumber.disabled = false;
    enterBtn.disabled = false;
    e.preventDefault();
};

// Define Event Listeners
guessForm.addEventListener("submit", checkAns);
restartBtn.addEventListener("click", restartGame);


