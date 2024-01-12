const colors = ["red", "green", "blue"];
function growBalloon() {
    const height = document.getElementById('Balloon').offsetHeight
    console.log(height)
    if(parseInt(height) <= 410){
        document.getElementById("Balloon").style.width = (height+10).toString()+"px";
        document.getElementById("Balloon").style.height = (height+10).toString()+"px";
        
    }
    else{
        document.getElementById("Balloon").style.width = "200px";
        document.getElementById("Balloon").style.height = "200px";
    }
    //Color
    const col = document.getElementById("Balloon").style.backgroundColor;
    var colorIndex = colors.indexOf(col)
    //console.log(colorIndex)
    if( colorIndex >= colors.length-1) {
        
        colorIndex = -1;
    }
    document.getElementById("Balloon").style.backgroundColor = colors[colorIndex+1];

}
function shrink(){
    const height = document.getElementById('Balloon').offsetHeight
    console.log("shrink")
    console.log(height)
    if(parseInt(height) > 200){
        document.getElementById("Balloon").style.width = (height-5).toString()+"px";
        document.getElementById("Balloon").style.height = (height-5).toString()+"px";
    }
    //Color
    const col = document.getElementById("Balloon").style.backgroundColor;
    var colorIndex = colors.indexOf(col)
    //console.log(colorIndex)
    if( colorIndex <= 0) {
        
        colorIndex = 3;
    }
    document.getElementById("Balloon").style.backgroundColor = colors[colorIndex-1];

}