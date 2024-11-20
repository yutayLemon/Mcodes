function NewNode(dash,dot,terminate){
    this.dash = dash;
    this.dot = dot;
    this.terminate = terminate;
}

var codes = [];
codes[0] = new NewNode(1,2,"");
codes[1] = new NewNode(3,4,"t");//-
codes[2] = new NewNode(5,6,"e");//.
codes[3] = new NewNode(7,8,"m");//--
codes[4] = new NewNode(9,10,"n");//-.
codes[5] = new NewNode(11,12,"a");//.-
codes[6] = new NewNode(13,14,"i");//..
codes[7] = new NewNode(undefined,undefined,"o");//---
codes[8] = new NewNode(15,16,"g");//--.
codes[9] = new NewNode(17,18,"k");//-.-
codes[10] = new NewNode(26,19,"d");//-..
codes[11] = new NewNode(20,21,"w");//.--
codes[12] = new NewNode(undefined,22,"r");//.-.
codes[13] = new NewNode(undefined,23,"u");//..-
codes[14] = new NewNode(24,25,"s");//...
codes[15] = new NewNode(undefined,undefined,"q");//--.-
codes[16] = new NewNode(undefined,undefined,"z");//--..
codes[17] = new NewNode(undefined,undefined,"y");//-.--
codes[18] = new NewNode(undefined,undefined,"c");//-.-.
codes[19] = new NewNode(undefined,undefined,"b");//-...
codes[20] = new NewNode(undefined,undefined,"j");//.---
codes[21] = new NewNode(undefined,undefined,"p");//.--.
codes[22] = new NewNode(undefined,undefined,"l");//.-..
codes[23] = new NewNode(undefined,undefined,"f");//..-.
codes[24] = new NewNode(undefined,undefined,"v");//...-
codes[25] = new NewNode(undefined,undefined,"h");//....
codes[26] = new NewNode(undefined,undefined,"x");//-..-
codes[27] = new NewNode(10,11,"");

function serch(directions){
    var currentNode = codes[0];
    for(var i =0;i<directions.length;i++){
        console.log(currentNode);
        if(directions[i] == "."){
            if(codes[currentNode.dot] == undefined){
                return false;
            }else{
                currentNode = codes[currentNode.dot];
            }
        }else if(directions[i] == '-'){
            if(codes[currentNode.dash] == undefined){
                return false;
            }else{
                currentNode = codes[currentNode.dash];
            }
        }else{
            return currentNode.terminate;
        }
    }
}

serch([".","-","s"]);