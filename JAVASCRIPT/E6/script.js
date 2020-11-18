var button1=document.querySelector("#btn1");
var button2=document.querySelector("#btn2");
var button3=document.querySelector("#btnR");
var display1=document.querySelector("#s1");
var display2=document.querySelector("#s2");
var reset=document.querySelector("#btnR")
var inputnumber=document.querySelector("input[type='number']");
winningDisplay=document.querySelector("p span")
var scoreP1=0;
var scoreP2=0;
var winningScore=5;
var gameover=false;


button1.addEventListener("click",function(){
    if(!gameover){
        scoreP1++;
        display1.textContent=scoreP1;
        if(scoreP1===winningScore){
            gameover=true;
            display1.style.color="green";
        }   
    }
    

});
button2.addEventListener("click",function(){
    if(!gameover){
        scoreP2++;
        display2.textContent=scoreP2;
        if(scoreP2===winningScore){
            gameover=true;
            display2.style.color="green";
        } }
    });
reset.addEventListener("click",function(){
    scoreP1=0;
    scoreP2=0;
    display1.textContent=scoreP1;
    display2.textContent=scoreP2;
    gameover=false;
    display1.style.color="black";
    display2.style.color="black";
  

})

inputnumber.addEventListener("change",function(){
    winningDisplay.textContent=inputnumber.value;
    winningScore=Number(inputnumber.value);


})
