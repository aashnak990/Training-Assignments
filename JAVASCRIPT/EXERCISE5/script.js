var boots=document.querySelector(".bts");
var hats=document.querySelector(".caps");
var goggles=document.querySelector(".goggle");
var muffler1=document.querySelector(".muff1");
var muffler2=document.querySelector(".muff2");


boots.addEventListener("click",function(){
  
   boots.classList.toggle("boot")
  
});
hats.addEventListener("click",function(){
  
    hats.classList.toggle("hat")
 });
 goggles.addEventListener("click",function(){
  
    goggles.classList.toggle("goggs")
 });
 muffler1.addEventListener("click",function(){
  
    muffler1.classList.toggle("muffs1")
 });
 muffler2.addEventListener("click",function(){
  
   muffler2.classList.toggle("muffs2")
 });
