objects=[]
 alert
sound=""
status=""

function preload(){
alert=loadSound()
video.hide()
}

function draw(){
image(video, 0, 0, 480, 400)
if(status!="")
{objectDetector.detect(video, gotResults)
}

for(i=0; i<objects.length; i++){
    document.getElementById("whatyouthink").innerHTML="Objects Detected"
    document.getElementById("number").innerHTML=objects.length;    
    fill("#97f3ff")
    percent=floor((objects[i].confidence)*100)
    text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y)
    noFill()
    stroke("#97f3ff")
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)

    if (object.length<=0){
alert.play()
    }
}
}

function setup (){
canvas=createCanvas(480, 400)
canvas.center()
}

function theSuccess(){
objectDetector=ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("whatyouthink").innerHTML="Detecting Objects"
}

function modelLoaded(){
    console.log("model was loaded, Good job! ^~^")
status=true;
alert.speed(1)
alert.volume(1)
}
function gotResults(error, results){
if(error){
console.log(error); }  
else{
console.log(results); 
objects=results
}
}