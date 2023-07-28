var i = false;
var n = false;
function move1(){
    if(n==true){
        document.getElementById("p1").style.fontSize = "16px";
        n=false;
    }
    else{
        document.getElementById("p1").style.fontSize = "0px";
        n=true;
    }
}
function move2(){
    if(i==true){
        document.getElementById("p2").style.fontSize = "16px";
        i=false;
    }
    else{
        document.getElementById("p2").style.fontSize = "0px";
        i=true;
    }
}