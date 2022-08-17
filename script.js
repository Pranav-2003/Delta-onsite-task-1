var clicks = 0;
let [milli,sec,min] = [0,0,0];
var ti=null;
window.addEventListener("load",function(){
    if(ti!=null){
        clearInterval(ti);
    }
    ti=setInterval(timer,10);
})
function change(){
    clicks+=1;
    var value1 = Math.random() * 80;
    var value2 = Math.random() * 60 + 10;
    document.getElementById("a").style.marginLeft = value1+"vw";
    document.getElementById("a").style.marginTop = value2+"vh";
    document.getElementById("c").innerHTML = "Remaining: " + (20-clicks);
    if(clicks==20){
        clearInterval(ti);
        document.getElementById("a").style.pointerEvents = "none";
        document.getElementById("win").style.display = "initial";
        document.getElementById("score").innerHTML = Math.floor((3000/sec))
    }
}
function timer(){
    milli+=10;
    if(milli==1000){
        milli=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;}
    }
}
function display(){
    document.getElementById("scoreboard").style.display="initial";
}
