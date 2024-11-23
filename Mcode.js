var originPos = {x:NaN,y:NaN};
var newPos = {x:NaN,y:NaN};
var CuCode = 0;
var CuDiget = 0;

function touchinit(eve){
    originPos.x = eve.touches[0].clientX;
    originPos.y = eve.touches[0].clientY;
    
    newPos.x = eve.touches[0].clientX;
    newPos.y = eve.touches[0].clientY;
}
function touchCh(eve){
    newPos.x = eve.touches[0].clientX;
    newPos.y = eve.touches[0].clientY;
}
function touchfin(eve){
    console.log(eve.touches);
    var difX = newPos.x - originPos.x;
    var difY = newPos.y - originPos.y;
    console.log(difX,difY);
    if(difX*difX + difY*difY < 1600){
        //console.log("center");
        SWPCenter();
    }else if(Math.abs(difX)>Math.abs(difY)*3){
        if(difX <0){//left
            //console.log("left");
            SWPLeft();
        }else if(difX > 0){//right
            //console.log("right");
            SWPRight();
        }
    }else if(Math.abs(difX)*3<Math.abs(difY)){
         if(difY <0){//up
            //console.log("up?");
             SWPUp();
        }else if(difY > 0){//down
            //console.log("down?");
            SWPDown();
        }    
    }else{//diagonal?
            //console.log("diagonal");
        SWPDiagonal();
    }
}
document.addEventListener("touchstart",touchinit,false);
document.addEventListener("touchmove",touchCh,false);
document.addEventListener("touchend",touchfin,false);




function SWPCenter(){
    CuDiget++;
    document.querySelector(".Out").textContent += ".";
}

function SWPRight(){
    CuCode += Math.pow(2,CuDiget);
    CuDiget++;
    document.querySelector(".Out").textContent += "-";
}

function SWPDiagonal(){
    CuCode += Math.pow(2,CuDiget);
    var Ochar = binM2Char[CuCode];
    console.log(Ochar);
    if(Ochar == undefined){
        Ochar = "?";
    }
    
    document.querySelector(".Out").textContent += " ";
    
    document.querySelector(".pl").textContent += Ochar;
    
    
    
     CuCode = 0;
    CuDiget = 0;
}

function SWPLeft(){
    
}

function SWPDown(){
    SWPDiagonal();
}

function SWPUp(){
    
}
