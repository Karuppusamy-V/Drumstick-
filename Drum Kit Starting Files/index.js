// document.querySelector("button").addEventListener("click",handleClick)

// function handleClick() {
//     alert("i got clikced");
// } normal function have name

var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfButtons;i++){
document.querySelectorAll("button")[i].addEventListener("click",function()  { // it is the anaymous fuction which does not have the name 
    var buttonInnerHTML = this.innerHTML;
    this.style.color = "while"

    switch (buttonInnerHTML){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
                
        default:
            console.log(buttonValue);
    }
    
});} 

document.addEventListener("keypress",function(){
    alert("key is preseed");
  
    

    switch (key){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
                
        default:
            console.log(buttonValue);
    }
})

// practice 

// normal function object

// var bellBoy = ({
//     name:"poo",
//     age:12,
//     year:2023,


// })

// console.log(bellBoy.year);

// // constructor function 
// function  BellBoy (name,year,age) {
//     this.name = name;
//     this.year = year;
//     this.age = age;
    
// }

// var bellBoy = new BellBoy("poo",2003,20)

// console.log(bellBoy.name);

