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
