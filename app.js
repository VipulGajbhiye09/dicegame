
  var n1 =Math.floor(Math.random()*6)+1;  // 1-6
  var n2 =Math.floor(Math.random()*6)+1;  // 1-6

var dice1="images/dice"+n1+".png"; //images/dice1-6.png
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",dice1);

var dice2="images/dice"+n2+".png"; //images/dice1-6.png
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",dice2);

if(dice1>dice2){
  document.querySelector("h1").textContent="Player 1 Wins !"
}
else if (dice2>dice1) {
  document.querySelector("h1").textContent="Player 2 Wins !"
}
else{
  document.querySelector("h1").textContent="It's a Draw "
}
