// document.querySelectorAll("button")[0].addEventListener("click",clickButton);
// document.querySelectorAll("button")[1].addEventListener("click",clickButton);
// document.querySelectorAll("button")[2].addEventListener("click",clickButton);
// document.querySelectorAll("button")[3].addEventListener("click",clickButton);
// document.querySelectorAll("button")[4].addEventListener("click",clickButton);
// document.querySelectorAll("button")[5].addEventListener("click",clickButton);
// document.querySelectorAll("button")[6].addEventListener("click",clickButton);

// var numberOfButtons = document.querySelectorAll(".drum").length
//
// for (var i = 0; i<numberOfButtons; i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//   var buttonInnerHTML = this.innerHTML;
//   makeSound(buttonInnerHTML);
// });
// }
//
//
//
//
//
//
//
//
//
// document.addEventListener("keydown",function(event) {
//   makeSound(event.key)
// });
//
//
//     function makeSound(key){
//       switch (key) {
//         case "w":
//           new Audio("sounds/tom-1.mp3").play();
//           break;
//           case "a":
//           new Audio("sounds/tom-2.mp3").play();
//           break;
//           case "s":
//           new Audio("sounds/tom-3.mp3").play();
//           break;
//           case "d":
//           new Audio("sounds/tom-4.mp3").play();
//           break;
//           case "j":
//           new Audio("sounds/snare.mp3").play();
//           break;
//           case "k":
//           new Audio("sounds/crash.mp3").play();
//           break;
//           case "l":
//           new Audio("sounds/kick-bass.mp3").play();
//           break;
//         default:
//     }};







var noOFButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOFButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML)
      buttonAnimation(buttonInnerHTML)
    }

  );
};
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key)
});


function makeSound(key) {
  switch (key) {
    case "w":

      new Audio("sounds/tom-1.mp3").play();

      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play()
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play()
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play()
      break;
    case "j":
      new Audio("sounds/snare.mp3").play()
      break;
    case "k":
      new Audio("sounds/crash.mp3").play()
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play()
      break;
    default:

  };
}


function buttonAnimation(pressed1){
  document.querySelector("." + pressed1).classList.add("pressed")

  setTimeout(function () {
    document.querySelector("." + pressed1).classList.remove("pressed")
  }, 100);


}
