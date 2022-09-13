
// // tween

// let tween

// let xpos = 100


// function setup() {
//   // put setup code here
//   createCanvas(600,600)

//   tween = new Juice()

// }

// function draw() {
//   // put drawing code here

//   ellipse( xpos, height/2,20,20 )

//   if(mouseIsPressed == true){
//     xpos = tween.tween(100,500)
//   }

//   if(keyIsPressed == true){
//     xpos = tween.tween(500,0)

//   }




//   ellipse()
// }


// Shake


let juice
let wiggle = 0

function setup() {
  // put setup code here
  createCanvas(600,600)

  juice = new Juice()

}

function draw(){
  background(0);

  if(mouseIsPressed === true){
    juice.particles(200,100,10,5,10,255,50,100,255)


    juice.screenShake(10)
 
  }

  if(mouseIsPressed === false){
    juice.particlesReset()
  }


  ellipse(width/2 + wiggle,height/2,20,20)


}