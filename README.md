<!DOCTYPE html>
<html lang="en">
<head>

    <!--title Simon say game title-->
    <title>Simon Say Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Simon Say Game</h1>
    <h2>Press start to begin the game.</h2>

    <!-- START BUTTON -->
    <button id="start-btn">Start</button>
    <div class="high-score">High Score : 0</div>

    <div class="btn_container">
        <div class="line-1">
            <div class="btn red" type="button" id="red">red</div>
            <div class="btn yellow" type="button" id="yellow">yellow</div>
        </div>

        <div class="line-2">
            <div class="btn green" type="button" id="green">green</div>
            <div class="btn purple" type="button" id="purple">purple</div>
        </div>
    </div>

    <h3></h3>

    <script src="script.js"></script>

</body>
</html>
body {
    text-align: center;
    background:
        linear-gradient(rgba(240, 213, 213, 0.4), rgba(30, 245, 209, 0.4)),
         url("");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
}

h1 {
    font-family: 'Lucida Handwriting', cursive;
    font-size: 60px;
    color: rgb(49, 99, 215);
    margin-top: 20px;
    margin-bottom: 0px;
}

.btn {
    width: 200px;
    height: 200px;
    border: 10px solid black;
    border-radius: 30%;
    margin: 2rem;
    cursor: pointer;
    align-content: center;
}

.btn_container {
    display: flex;
    justify-content: center;
}

.yellow {
    background-color: #f7de01;
}
.red {
    background-color: #ff3657;
}

.green {
    background-color: #bbff00;
}

.purple {
    background-color: #51098b;
}

.flash {
    background-color: rgb(11, 241, 7);
}

.userflash {
    background-color: rgb(255, 0, 0);
}

.high-score {
    font-family: Tahoma, sans-serif;
    font-weight: 600;
    color: rgb(49, 99, 215);
    padding-top: 10px;
    width: 190px;
    height: 45px;
    border: 4px solid grey;
    font-size: 24px;
    margin-top: 20px;
    margin-left: 2rem;
    box-shadow: 1px 10px 10px grey;
}

#start-btn {
    padding: 10px 25px;
    font-size: 18px;
    font-weight: bold;
    margin: 15px;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    background-color: rgb(49, 99, 215);
    color: rgb(0, 0, 0);
}

let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");
let startBtn = document.querySelector("#start-btn");
let allBtns = document.querySelectorAll(".btn");

// disable buttons initially
allBtns.forEach(btn => btn.classList.add("disabled"));

startBtn.addEventListener("click", function () {
    if (!started) {
        started = true;
        h2.innerText = "Watch the pattern ";
        startBtn.disabled = true;
        allBtns.forEach(btn => btn.classList.remove("disabled"));
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 250);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random() * btns.length);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    gameflash(randbtn);
}

function checkans(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Score: <b>${level}</b><br>Press Start to restart`;
        document.body.style.backgroundColor = "red";

        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 200);

        reset();
    }
}

function btnpress() {
    if (!started) return; //  block clicks before start

    let btn = this;
    userflash(btn);

    let usercolor = btn.id;
    userseq.push(usercolor);

    checkans(userseq.length - 1);
}

allBtns.forEach(btn => btn.addEventListener("click", btnpress));

function reset() {
    started = false;
    if (level > highScore) highScore = level;

    level = 0;
    gameseq = [];
    userseq = [];

    startBtn.disabled = false;
    allBtns.forEach(btn => btn.classList.add("disabled"));
    highscore();
}

function highscore() {
    let highscr = document.querySelector(".high-score");
    if (highscr) {
        highscr.innerText = `High Score: ${highScore}`;
    }
}
