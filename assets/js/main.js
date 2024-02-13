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

function chooseHand(hand) {
  let enemyMove = Number(Math.ceil(Math.random() * 3));

  ergebnis.style.opacity = "1";
  if (enemyMove === 1) {
    switch (hand) {
      case "rock":
        console.log(hand);
        ergebnis.innerHTML = "Draw <br> both had Rock";
        scissor.style.opacity = "0.2";
        rock.style.opacity = "1";
        paper.style.opacity = "0.2";
        break;
      case "paper":
        console.log(hand);
        ergebnis.innerHTML = "You win <br> enemy had Rock";
        scissor.style.opacity = "0.2";
        rock.style.opacity = "0.5";
        paper.style.opacity = "1";
        break;
      case "scissor":
        console.log(hand);
        ergebnis.innerHTML = "You lose <br> enemy had Rock";
        scissor.style.opacity = "0.2";
        rock.style.opacity = "1";
        paper.style.opacity = "0.5";
        break;
    }
  } else if (enemyMove === 2) {
    switch (hand) {
      case "rock":
        console.log(hand);
        ergebnis.innerHTML = "You lose <br> enemy had Paper";
        scissor.style.opacity = "0.2";
        rock.style.opacity = "0.5";
        paper.style.opacity = "1";
        break;
      case "paper":
        console.log(hand);
        ergebnis.innerHTML = "Draw <br> both had Paper";
        scissor.style.opacity = "0.2";
        rock.style.opacity = "0.2";
        paper.style.opacity = "1";
        break;
      case "scissor":
        console.log(hand);
        ergebnis.innerHTML = "You win <br> enemy had Paper";
        scissor.style.opacity = "1";
        rock.style.opacity = "0.2";
        paper.style.opacity = "0.5";
        break;
    }
  } else if (enemyMove === 3) {
    switch (hand) {
      case "rock":
        console.log(hand);
        ergebnis.innerHTML = "You win <br> enemy had Scissor";
        scissor.style.opacity = "0.5";
        rock.style.opacity = "1";
        paper.style.opacity = "0.2";
        break;
      case "paper":
        console.log(hand);
        ergebnis.innerHTML = "You lose <br> enemy had Scissor";
        scissor.style.opacity = "1";
        rock.style.opacity = "0.2";
        paper.style.opacity = "0.5";
        break;
      case "scissor":
        console.log(hand);
        ergebnis.innerHTML = "Draw <br> both Scissor";
        scissor.style.opacity = "1";
        rock.style.opacity = "0.2";
        paper.style.opacity = "0.2";
        break;
    }
  }
}
