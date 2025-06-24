let tableauSons = [
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/snare.mp3",
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
];

// Détecte le clic sur le bouton et fais le bruit
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    const son = new Audio(tableauSons[i]);
    son.play();
    buttonAnimation(this.innerHTML);
  });
}

// Détecter l'appuie sur le clavier et renvoie la valeur de la touche à la fonction makeSound et buttonANimation
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio(tableauSons[0]);
      crash.play();
      break;
    case "a":
      let kickBass = new Audio(tableauSons[1]);
      kickBass.play();
      break;
    case "s":
      let snare = new Audio(tableauSons[2]);
      snare.play();
      break;
    case "d":
      let tom1 = new Audio(tableauSons[3]);
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio(tableauSons[4]);
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio(tableauSons[5]);
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio(tableauSons[6]);
      tom4.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(curentKey) {
  let activeButton = document.querySelector("." + curentKey);
 activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 150);
}
