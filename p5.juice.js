class Juice{
    constructor(){
        // Tweening Settings
        this.tweenStart = 0
        this.tweenTarget = 0
        this.tweenSpeed = 0.1
        this.incTweenStart = false
        
        // mouseSpeedJelly Settings

        
    }

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

        //utility for easing
        return this.incTweenStart += (this.tweenTarget - this.incTweenStart) * this.tweenSpeed 
    }



    mouseSpeedX(){
        return Math.abs(mouseX - pmouseX);
    }

    mouseSpeedY(){
        return Math.abs(mouseY - pmouseY);
    }

    mouseSpeedJelly(){
        //mouseSpeed with easing

    }

    

    shake(){
        //a small wiggle animation

    }

    sfx(audioFile){
        //audio file based sound effect
    }

    ssfx(){
        //synth based sound effect
    }

    particles(){
        // a small particle engine with a plume of ellipses or rectangles
    }

    pathHistory(){
        // update the current position of an element's position to add it to the path history
        //second attribute specifys the length? or maybe this is just a variable?
    }

    screenShake(){
        // shake the entire canvas
        //do this with p5.dom instead of moving everything on the cavas!
    }

    addFace(){
        // maybe? add a face to a specificed location, have the eyes follow a specified point.
    }






}