var buttonColors=["red","blue","green","yellow"];
var pattern=[];
var userpattern=[];
var track=0;

$(".btn").click(function(){
    var userChosen=this.id;    //to get id name
    userpattern.push(userChosen);
    $("#"+userChosen).addClass("pressed");
    setTimeout(() => {
        $("#"+userChosen).removeClass("pressed");  
    }, 500);
    playsound(userChosen);
    checkSequence(userpattern.length-1);   //checking each input one by one at the end position
   })
   var level=0; 
function sequence(){
    userpattern=[];
 var randomNo=Math.round(3*Math.random());
 var randomColor=buttonColors[randomNo];
 pattern.push(randomColor);
$("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomColor);   
level++;
$("h1").html("Level " + level);
//a document can only play sound on it owns after loading, if it has been interacted with a keyboard.
 }
function playsound(name){
    switch (name) {
        case "blue":
            var audio=new Audio("sounds/blue.mp3");
           audio.play();
            break;
            case "green":
            var audio=new Audio("sounds/green.mp3");
           audio.play();
            break;
            case "red":
            var audio=new Audio("sounds/red.mp3");
           audio.play();
            break;
            case "yellow":
            var audio=new Audio("sounds/yellow.mp3");
           audio.play();
            break;
    
        default:
            break;
    }
} 
$("html").keydown(() => {
    if(track===0){
    sequence();
    track=1;  //so that further keyboard presses cannot trigger this function
    }
})
function checkSequence(index){
    if(userpattern[index]===pattern[index]) //to check if the latest color that user clicked is same as the random color generated
    {   
        console.log("success");   //returns success if the color is same AND if the length is same ,it performs the next function
        if( userpattern.length===pattern.length) //and to check that the user has finished their sequence
        setTimeout(() => {
            sequence();
        }, 1000);
    }
     
     else{
    $("h1").html("Game Over.Press any key to restart the game");
    var aud=new Audio("sounds/wrong.mp3");
    aud.play();
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
    over();
     }
    }
    function over(){
        level=0;
        pattern=[];
        track=0;
        }
