for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });

}


document.addEventListener("keypress", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);

});


function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();

            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();

            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();

            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();

            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();

            break;

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();

            break;

        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();

            break;


        default:
            break;
    }


}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {

        activeButton.classList.remove("pressed");


    }, 100);

}






/*//* to play Sounds >>>
var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
*/


/**
 * //*Objects 
 * 
 *  
 *   
 * 
 * 
 * 
 * class BellBoy with Constructor function >>>
 * function BellBoy(name , age , hasWorkPermit , languages){
 * 
 *  this.name = name ;
 *  this.age = age; 
 *  this.hasWorkPermit = hasWorkPermit; 
 *  this.languages = languages; 
 * 
 * }
 * 
 *
 * declaring the object >>>
 * var bellBoy1 = new BellBoy("ahmed" , 19 , true , ["French , "English"]);
 * var bellBoy2 = new BellBoy("omar" , 20 , true , ["Arabic , german"])
 * 
 * 
 * 
 * 
 * etc ... 
 * 
 * 
 * another Example : 
 * 
 * 
 * HouseKeeperClass>>>
 * 
 * function HouseKeeepr(name , age , hasPermitWork , specizilation){
 * 
 * this.age = age ; 
 * this.name = name ;
 * this.hasPermitWork = hasPermitWork; 
 * this.specizilation = specizilation;
 * 
 * }
 * 
 * 
 * var houseKeeper1 = new HouseKeeper("omar" , 19 , false , ["bedroom" , "kitchens"]);
 * var ................................................................................;
 * 
 * etc...
 * 
 */


/* 


/** 
 *  objects >> methods 
 *   
 * function BellBoy(name , age , hasWorkPermit , languages){
 * 
 * this.name = name ;
 * this.age = age ;
 * this.hasWorkPermit = hasWorkPermit;
 * this.languages = languages;
 * this.moveSuitCase = function (){
 * alert("May I take your suitcase?");
 * pickUpSuitCase();
 * move();
 * }
 * 
 * 
 * }
 * 
 * 
 * 
 * 
 * var bellBoy1 = new BellBoy("omar" , 20 , true , ["ar" , "en"])
 * 
 * bellBoy1.moveSuitCase()
 *  
 * 
*/















/*
function add (num1 , num2){
return num1 +num2;
}

function multiply(num1 , num2){

    return num1 * num2;
}

function claculator(num1 , num2 , operator){

    return operator(num1 , num2)
}


*/