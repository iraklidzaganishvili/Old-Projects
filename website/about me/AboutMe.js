//If anyone sees this please don't judje I really didn't feel like making a general case for all of these with arrays...
var n1 = false;
function move1(){
    if(n1==true){
        document.getElementById("p1").style.fontSize = "16px";
        n1=false;
    }
    else{
        document.getElementById("p1").style.fontSize = "0px";
        n1=true;
    }
}
var n2 = false;
function move2(){
    if(n2==true){
        document.getElementById("p2").style.fontSize = "16px";
        document.getElementById("img1").style.width = "300px";
        document.getElementById("img2").style.width = "300px";
        n2=false;
    }
    else{
        document.getElementById("p2").style.fontSize = "0px";
        document.getElementById("img1").style.width = "0px";
        document.getElementById("img2").style.width = "0px";
        n2=true;
    }
}
var n3 = false;
function move3(){
    if(n3==true){
        document.getElementById("p3").style.fontSize = "16px";
        n3=false;
    }
    else{
        document.getElementById("p3").style.fontSize = "0px";
        n3=true;
    }
}
var n4 = false;
function move4(){
    if(n4==true){
        document.getElementById("p4").style.fontSize = "16px";
        n4=false;
    }
    else{
        document.getElementById("p4").style.fontSize = "0px";
        n4=true;
    }
}
var n5 = false;
function move5(){
    if(n5==true){
        document.getElementById("p5").style.fontSize = "16px";
        n5=false;
    }
    else{
        document.getElementById("p5").style.fontSize = "0px";
        n5=true;
    }
}