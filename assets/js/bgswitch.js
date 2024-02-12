let header = document.querySelector("header");

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
