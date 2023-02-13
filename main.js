song="";
song2="";

function setup(){
    canvas=createCanvas(350,350)
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,350,350);
}

function preload(){
    song=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}