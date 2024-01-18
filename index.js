for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",()=>{
        let buttonInnerHtml = document.querySelectorAll(".drum")[i].innerHTML;
        buttonClickPress(buttonInnerHtml);
        buttonAnimate(buttonInnerHtml);
    })
}

document.addEventListener("keydown",(event)=>{
    buttonClickPress(event.key);
    buttonAnimate(event.key);
})

function buttonClickPress(clickpress)
{
    switch(clickpress){
        case "w" :
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break; 

        case "a" :
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;    

        case "s" :
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "d" :
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j" :
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break; 
            
        case "k" :
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
            
        case "l" :
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

         default: console.log(clickpress);   

    }  

}

function buttonAnimate(pressedkey)
{
    document.querySelector("."+pressedkey).classList.add("pressed");
    setTimeout(()=>{
        document.querySelector("."+pressedkey).classList.remove("pressed");
    },200)
}