var buttoncolors=["red","blue","green","yellow"];
var gamepattern=[];
var userpattern=[];
var level=0;
var start=false;

$(document).keydown(function(){
    if(!start){
    // $("h1").text("level "+level);
    // $("p").text("");
    nextSequence();
    start=true;
}})

$(".btn").click(function(){
    var userchosenColor=$(this).attr("id");
    userpattern.push(userchosenColor);
    // console.log(userpattern);
    makesound(userchosenColor);
    animation(userchosenColor);
    check(userpattern.length-1);
})

function nextSequence()
{
    userpattern=[];
    level++;
    $("h1").text("level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    // console.log(randomNumber);
    var randomColor= buttoncolors[randomNumber];
    // console.log(randomColor);
    gamepattern.push(randomColor);
    $("#"+ randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    makesound(randomColor);
    // animation(randomColor);
}

function makesound(name)
{
    var audio=new Audio("sounds/"+ name+".mp3");
    audio.play();
}

function animation(name)
{
    $("."+name).addClass("pressed");
    setTimeout(function(){
        $("."+name).removeClass("pressed");
    }, 100);
}

// function check(currentLevel)
// {
//     if (gamepattern[currentLevel] === userpattern[currentLevel]) {

//         // console.log("success");  
//         if (userpattern.length === gamepattern.length){  
          
//           setTimeout(function () {
//             nextSequence();
//           }, 1500);
  
//         }
  
//       } else {
//         $("body").addClass("game-over");
//         setTimeout(function(){
//             $("body").removeClass("game-over");
//         }, 200);
//         // console.log("wrong");
//         $("h1").text("Game Over!");
//         $("p").text("Press any key to Restart!");
//         startover();
  
//       }
// }

function startover()
{
    level=0;
    gamepattern=[];
    start=false;
}