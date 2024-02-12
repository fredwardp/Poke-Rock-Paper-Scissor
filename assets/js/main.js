// rock = 1
// paper = 2
// scissor = 3
let audio = document.querySelector("audio");
audio.volume = 0.1;
let ergebnis = document.querySelector(".score_message");
console.log(ergebnis);
const scissor = document.querySelector(".scissor_div");
const paper = document.querySelector(".paper_div");
const rock = document.querySelector(".rock_div");

// const myScore = Number(document.querySelector(".score_you").innerText);
// console.log(myScore);

const bang = document.querySelector(".bang_animation");
function chooseRock() {
  let enemyMove = Number(Math.ceil(Math.random() * 3));

  ergebnis.style.opacity = "1";
  if (enemyMove === 1) {
    ergebnis.innerHTML = "Draw <br> both had Rock";
    scissor.style.opacity = "0.1";
    rock.style.opacity = "1";
    paper.style.opacity = "0.1";
    bang.style.animation = "bang 1s forwards";
  } else if (enemyMove === 2) {
    ergebnis.innerHTML = "You lose <br> enemy had Paper";
    scissor.style.opacity = "0.1";
    rock.style.opacity = "0.5";
    paper.style.opacity = "1";

    myScore.innerHTML += newScore;
  } else {
    ergebnis.innerHTML = "You win";
    scissor.style.opacity = "0.5";
    rock.style.opacity = "1";
    paper.style.opacity = "0.1";
  }
}

function chooseScissor() {
  let enemyMove = Number(Math.ceil(Math.random() * 3));

  ergebnis.style.opacity = "1";
  if (enemyMove === 1) {
    ergebnis.innerHTML = "You lose <br> enemy had Rock";
    scissor.style.opacity = "0.5";
    rock.style.opacity = "1";
    paper.style.opacity = "0.1";
  } else if (enemyMove === 2) {
    ergebnis.innerHTML = "You win";
    scissor.style.opacity = "1";
    rock.style.opacity = "0.1";
    paper.style.opacity = "0.5";
  } else {
    ergebnis.innerHTML = "Draw <br> both Scissor";
    scissor.style.opacity = "1";
    rock.style.opacity = "0.1";
    paper.style.opacity = "0.1";
  }
}

function choosePaper() {
  let enemyMove = Number(Math.ceil(Math.random() * 3));

  ergebnis.style.opacity = "1";
  if (enemyMove === 1) {
    ergebnis.innerHTML = "You win";
    scissor.style.opacity = "0.1";
    rock.style.opacity = "0.5";
    paper.style.opacity = "1";
  } else if (enemyMove === 2) {
    ergebnis.innerHTML = "Draw <br> both had Paper";
    scissor.style.opacity = "0.1";
    rock.style.opacity = "0.1";
    paper.style.opacity = "1";
  } else {
    ergebnis.innerHTML = "You lose <br> enemy had Scissor";
    scissor.style.opacity = "1";
    rock.style.opacity = "0.1";
    paper.style.opacity = "0.5";
  }
}

const header = document.querySelector("header");

const backgrounds = [];

const backgroundSwitch = () => {
  let backgroundNumber = Number(Math.ceil(Math.random() * 6));
  console.log(backgroundNumber);
  if (backgroundNumber === 1) {
    header.style.backgroundImage =
      "url(assets/img/pokemon_version/Arena_bright_darkened.png)";
  } else if (backgroundNumber === 2) {
    header.style.backgroundImage =
      "url(assets/img/pokemon_version/background2.png)";
  } else if (backgroundNumber === 3) {
    header.style.backgroundImage =
      "url(assets/img/pokemon_version/background3.png)";
  } else if (backgroundNumber === 4) {
    header.style.backgroundImage = "url(assets/img/pokemon_version/bg4.png)";
  } else if (backgroundNumber === 5) {
    header.style.backgroundImage = "url(assets/img/pokemon_version/bg5.png)";
  } else if (backgroundNumber === 6) {
    header.style.backgroundImage = "url(assets/img/pokemon_version/bg6.png)";
  }
};

backgroundSwitch();
