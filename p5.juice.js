class Juice{
    constructor(){
        // Tweening Settings
        this.tweenStart = 0
        this.tweenTarget = 0
        this.tweenSpeed = 0.1
        this.incTweenStart = false

        // shake
        this.shakeTween = 0
        this.shakeCount = 0
        this.shakeDirection = 1

        //note SFX
        this.monoSynth = new p5.MonoSynth();
        userStartAudio();

        //particles
        this.particleSettings = false;
        this.particleArray = []
        this.allParticlesDied = false;

        this.particlesLifespan = 0
        this.particlesX = 0 
        this.particlesY = 0


        //Screen Shake
        this.screenShakeX = 0
        this.screenShakeY = 0
        this.screenShakeDuration = 0

        //path recorder
        //maybe switch this to a vector later on?
        this.pathArrayX = []
        this.pathArrayY = []



        
    }

    //speed is optional
    tween(start,target,speed){
        this.tweenStart = start
        this.tweenTarget = target 

        if(speed == undefined){
            this.tweenSpeed = 0.1
        }else{
            this.tweenSpeed = speed
        }

        //only set the starting position the first time (so that we dont have to have an extra function for settings).
        if(this.incTweenStart == false){
            this.incTweenStart = this.tweenStart
        }

        let calc = this.incTweenStart += (this.tweenTarget - this.incTweenStart) * this.tweenSpeed 

        //utility for easing
        return calc
    }

    //Mouse Speed Section

    mouseSpeedX(){
        return Math.abs(mouseX - pmouseX);
    }

    mouseSpeedY(){
        return Math.abs(mouseY - pmouseY);
    }

    mouseSpeed(){
        return this.mouseSpeedX() + this.mouseSpeedY()
    }

    //Audio File SFX
    sfx(audioFile, startTime){
        //audio file based sound effect

        audioFile.play(startTime)
    }

    //single note SFX
    synthNote(note,duration){
        //synth based sound effect
        this.monoSynth.play(note, 1, 0, duration);

    }

    particles(x,y, size, speed, lifespan, r,g,b,a){
        // a small particle engine with a plume of ellipses 

        //save these so we can reset
        this.particlesLifespan = lifespan
        this.particlesX = x
        this.particlesY = y

        //generate particles if it's the first time the function runs.
        if(this.particleSettings == false && this.particleArray < 10){
            for(let i = 0 ; i < 10; i++){
                let p = new particle(x,y,size,speed,lifespan,r,g,b,a)
                this.particleArray.push(p)
            }
        }
        //make sure the particles exist
        if(this.particleArray != 0){
            for(let i = 0 ; i < this.particleArray.length; i++){

                if(this.particleArray[i].lifespan > 0){
                    this.particleArray[i].render();
                }
            }
        }

    }


    particlesReset(){

                //make sure the particles exist
                if(this.particleArray != 0){
                    for(let i = 0 ; i < this.particleArray.length; i++){
        
                        this.particleArray[i].lifespan =  this.particlesLifespan
                        this.particleArray[i].x =  this.particlesX
                        this.particleArray[i].y =  this.particlesY


                    }
                }

    }

    pathHistory(x,y,length,r,g,b,a,SW){
        // update the current position of an element's position to add it to the path history
        //second attribute specifys the length? or maybe this is just a variable?
        this.pathArrayX.push(x)
        this.pathArrayY.push(y)

        if(this.pathArrayX.length > length){
            this.pathArrayX.splice(0,1);
            this.pathArrayY.splice(0,1);  
        }

        for(let i = 1 ; i < this.pathArrayX.length; i++){
    
            let mR = map(i,0,this.pathArrayX.length,0,r)
            let mG = map(i,0,this.pathArrayX.length,0,g)
            let mB = map(i,0,this.pathArrayX.length,0,b)
            // let mA = map(i,0,this.pathArrayX.length,0,a)
            let mSW = map(i,0,this.pathArrayX.length,0,SW)

            push()
                strokeWeight(mSW)
                stroke(mR,mG,mG,a)
                line(this.pathArrayX[i],this.pathArrayY[i],this.pathArrayX[i-1],this.pathArrayY[i-1])
            pop()
            
        }



    }

    screenShake(shakeAmount){
        // shake the entire canvas
        //do this with p5.dom instead of moving everything on the cavas!

        this.screenShakeX += random(-shakeAmount, shakeAmount)
        this.screenShakeX = constrain(this.screenShakeX,-shakeAmount, shakeAmount)

        this.screenShakeY += random(-shakeAmount, shakeAmount)
        this.screenShakeY = constrain(this.screenShakeY,-shakeAmount, shakeAmount)


        select('canvas').position(this.screenShakeX, this.screenShakeY);

        console.log(shakeAmount, this.screenShakeX, this.screenShakeY)

    }



}



class particle{
    constructor(x,y,size, speed, lifespan,r,g,b,a){
        this.x = x
        this.y = y
        this.speed = speed
        this.sz = random(size/2, size)
        this.lifespan = random(lifespan/2, lifespan)
        this.r = r
        this.g = g 
        this.b = b
        this.a = a

    }

    render(){
        //brownian motion
        this.x += random(-this.speed, this.speed)
        this.y += random(-this.speed, this.speed)
        this.lifespan --
        
        push()
            noStroke()
            fill(this.r, this.g, this.b, this.a)
             ellipse(this.x,this.y,this.sz)
        pop()
    }
}