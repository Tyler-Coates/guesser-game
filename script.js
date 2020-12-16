document.getElementById("button").addEventListener("click", guesser);
function guesser() {
  let text = document.getElementById("text").value;
 let math=Math.floor(Math.random() * 7); 
if (math==text){
alert("You win");
}
alert(text);
alert(math);
}