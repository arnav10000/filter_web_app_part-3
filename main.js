noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/Kz1tRfMK/clown-nose.jpg');
}

function setup() {
    canvas = createCanvas(350, 300);
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();
    canvas.center();
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX  =  results[0].pose.nose.x-15;
        noseY  =  results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function modelLoded() {
    console.log('PoseNet Is Initializd')
}

function draw() { 
    image(video, 0, 0, 350, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}