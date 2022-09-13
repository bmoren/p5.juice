

let path
let tjx, tjy
let note
let notes = ["C","D","E","F"]

let xpos = 200
let ypos = 200
let xTarget = 0
let yTarget = 0 

function setup() {
  // put setup code here
  createCanvas(600,600)

  path = new Juice()
  tjx = new Juice()
  tjy = new Juice()
  note = new Juice()



}

function draw(){
  background(0);
  noStroke()


  if(frameCount % (30*5) === 0){
    console.log('go')
    xTarget = random(width)
    yTarget = random(height)
    note.synthNote(notes[floor(random(notes.length))] + floor(random(2,5)), random(0.01,0.5))


  }

  xpos = tjx.tween(0,100,0.5)
  console.log(xpos)

  ypos = tjy.tween(0,yTarget,0.5)


  path.pathHistory(xpos,ypos, 20,255,255,255,255,40)


  ellipse(xpos,ypos,40,40)


}