
let randomnumber1 = Math.floor(Math.random()*6 + 1);

let randomnumber2 = Math.floor(Math.random()*6 + 1);

    document.querySelector(".img1").setAttribute("src","images/dice"+ randomnumber1 +".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+ randomnumber2 +".png");

    if (randomnumber1<randomnumber2){
        document.querySelector("h1").innerHTML = "Right Wins 🚩 ";
    }else if(randomnumber1>randomnumber2) {
        document.querySelector("h1").innerHTML = "left WinS 🚩";
    }else{
        document.querySelector("h1").innerHTML = "draw no one wins  ";
    }

