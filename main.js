img = "";
noseX = "";
noseY = "";
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}



function preload()
{
  img = loadImage("mario05.png");
}

function setup() {
  canvas = createCanvas(1240, 336);
  canvas.parent('canvas');

  instializeInSetup(mario);

  video = createCapture(VIDEO);
  video.size(800, 400);
  video.parent('game_console');
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded(){
  console.log('M̸̩̽o̸͍̱͋͝d̷̡̩́̎e̵̱̯̎l̶͎̈́͗ ̶̣̆Ļ̵̿̿ò̷̹̾ä̶̜͉́d̵͎̈́ĕ̶͎͙͝ḋ̸̪̚ ̶̜͝!̶͈̞̽̄1̵͇̓̆!̷̝͍́');
}

function gotPoses(results)
{
  if(results.length > 0 )
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
      console.log("noseX = " + noseX + ", noseY = " + noseY);
    }
}

function draw() {
  game();
}








