let a = Math.floor(Math.random()*6)+1;
let b = Math.floor(Math.random()*6)+1;
let c = "";
if(a > b){
    c = " Player 1 WON!! "
}
else if(b > a){
    c = " Player 2 WON!!"
}
else{
    c = " Draw!! "
}

document.querySelector(".show").innerText = c;

document.querySelector(".img1").setAttribute("src","./images/dice"+a+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+b+".png");