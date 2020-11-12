var todos=[];

var task= prompt("what would you like to do?")
while(task!=="quit")
{
if (task==="list")
{
    console.log(todos);
}
else if(task==="add"){
   var input=prompt("what would you like to add?")
    todos.push(input)
}
 
task=prompt("what would you like to do?")
}
console.log("goodbye!")
