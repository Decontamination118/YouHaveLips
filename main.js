lipsX=0;
lipsY=0;
function preload() {
    lips=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup() {
    canvas= createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is On');
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(155, 0, 0);
    stroke(12, 15, 18);
    image(lips, lipsX, lipsY, 30, 30);
}

function take_snapshot() {
    save('meWithLIPS.png');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        lipsX=results[0].pose.nose.x-15;
        lipsY=results[0].pose.nose.y+10;
        console.log("lips_x="+ lipsX+"lips_y="+lipsY);
    }
}