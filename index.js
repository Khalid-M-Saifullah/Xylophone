var totalKeys = document.querySelectorAll(".key").length;

for (var i = 0; i < totalKeys; i++) {
    document.querySelectorAll(".key")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}


function makeSound (key) {
    switch (key) {
        case "A":
            var snd = new Audio("sounds/a.wav");
            snd.play();
            break;

        case "B":
            var snd = new Audio("sounds/b.wav");
            snd.play();
            break;

        case "C":
            var snd = new Audio("sounds/c.wav");
            snd.play();
            break;

        case "D":
            var snd = new Audio("sounds/d1.wav");
            snd.play();
            break; 
            
        case "E":
            var snd = new Audio("sounds/e1.wav");
            snd.play();
            break;
        
        case "F":
            var snd = new Audio("sounds/f.wav");
            snd.play();
            break;  

        case "G":
            var snd = new Audio("sounds/g.wav");
            snd.play();
            break;

        default:
            break;
    }
}


function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    // console.log(activeButton);
    activeButton.classList.add("active-button-color");

    setTimeout (function() {
        activeButton.classList.remove("active-button-color");
    }, 100);
}


