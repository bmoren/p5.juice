
let tween

let xpos = 100


function setup() {
  // put setup code here
  createCanvas(600,600)

  tween = new Juice()

}

function draw() {
  // put drawing code here

  ellipse( xpos, height/2,20,20 )

  if(mouseIsPressed == true){
    xpos = tween.tween(100,500)
  }

  if(keyIsPressed == true){
    xpos = tween.tween(500,0)

  }
}