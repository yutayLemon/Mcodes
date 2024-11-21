const cliker = document.querySelector(".cliker");
const disp = document.querySelector(".Out");
const plai = document.querySelector(".pl");
var LastTime = 0;
var TimeUnit = 100;
var audCtx;
var sound;
var gainNode;
var currentNode = codes[0];


document.querySelector(".timeUnit").addEventListener("change",()=>{
    TimeUnit = document.querySelector(".timeUnit").value;
})
cliker.addEventListener('mousedown',()=>{
    Down();
});
cliker.addEventListener('mouseup',()=>{
    Up();
});
document.querySelector(".inp").addEventListener("keydown",()=>{
                                                Down();
                                                });
document.querySelector(".inp").addEventListener("keyup",()=>{
                                                Up();
                                                });

document.querySelector("body").addEventListener("keydown",()=>{
                                                Down();
                                                });
document.querySelector("body").addEventListener("keyup",()=>{
                                                Up();
                                                });

function Down(){
    if(sound == undefined){
        
audCtx = new AudioContext();

sound = audCtx.createOscillator();
gainNode = audCtx.createGain();
gainNode.gain.value = 0;
sound.type = "square";
sound.frequency = 440; // value in hertz
gainNode.connect(audCtx.destination);
sound.connect(gainNode);
sound.start();
    }
   gainNode.gain.setTargetAtTime(0.1,audCtx.currentTime,0.001);
    cliker.style.backgroundColor = "red";
   var Ctime = new Date();
    Ctime = Ctime.getTime();
    ProssesWhiteSpaces(Ctime-LastTime);
    LastTime = Ctime;
}

function Up(){
    gainNode.gain.setTargetAtTime(0,audCtx.currentTime,0.001);
    cliker.style.backgroundColor = "aqua";
   var Ctime = new Date();
    Ctime = Ctime.getTime();
    console.log(Ctime-LastTime);
    Prosses(Ctime-LastTime);
    LastTime = Ctime;
}

function Prosses(timeLen){
    console.log(currentNode);
    if(timeLen <= 1.5*TimeUnit){
        disp.textContent += ".";
        console.log("dot");
        if(codes[currentNode.dot] != undefined){
        currentNode = codes[currentNode.dot];
        }
    }else{
        disp.textContent += "-";
        console.log("dash");
        if(codes[currentNode.dash] != undefined){
        currentNode = codes[currentNode.dash];
    }
}
}

function ProssesWhiteSpaces(timeLen){
    if(timeLen <= 4*TimeUnit){
        console.log("too short");
    }else{
        console.log(currentNode.terminate);
        plai.textContent += currentNode.terminate;
        currentNode = codes[0];
    if(timeLen <= 4*TimeUnit){
        console.log("next letter");
    }else if(timeLen <= 10.5*TimeUnit){
        disp.textContent += " ";
        plai.textContent += " ";
        console.log("new word");
    }else{
        disp.textContent += " ";
        console.log("too long");
    }
    }
}
