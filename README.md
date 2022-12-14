<!-- ![p5.collide](p5collide2d.png) -->

#### a library for adding juice and effects to p5.js sketches and games

p5.juice builds on the efforts outlined in [Game Feel: A Game Designer's Guide to Virtual Sensation](https://bookshop.org/books/game-feel-a-game-designer-s-guide-to-virtual-sensation/9781138403253) written by Steve Swink and the 2012 talk [Juice it or Lose it!](https://www.youtube.com/watch?v=Fy0aCDmgnxg) by Martin Jonasson & Petri Purho


### Adding p5.juice to your project
[Download the latest release](https://github.com/bmoren/p5.juice/releases/)
[How to add a library to your p5.js sketch](https://p5js.org/libraries/)

#### CDN Link
+ https://cdn.jsdelivr.net/gh/bmoren/p5.juice@master/p5.juice.js

#### How to use a CDN hosted version of the p5.juice library
To include the library via a CDN, add the library's CDN link using a `<script>` tag inside the `index.html` file within your project. 
```html
<!--
This enables the p5.js core library (automatically added within the p5.js web editor).
You'll need to include the core p5.js before using p5.juice.
-->
<script defer src="https://unpkg.com/p5"></script>

<!-- Includes the p5.juice addon library -->
<script defer src="https://cdn.jsdelivr.net/gh/bmoren/p5.juice@master/p5.juice.js"></script>
```

## Table of Contents

  + [Juice()](#juice-object)
  + [tween()](#tween)
  + [mouseSpeedX()](#mousespeedx)
  + [mouseSpeedY()](#mousespeedy)
  + [sfx()](#sfx)
  + [synthNote()](#synthnote)
  + [particles()](#particles)
  + [particlesReset()](#particlesreset)
  + [pathHistory()](#pathhistory)
  + [screenShake()](#screenshake)

## p5.juice Examples & Documentation


#### Juice() object
###### let feel = new Juice()
invoke the core Juice object

[Live example]()

```javascript

```



#### tween()
###### tween(start,target,speed)
Creates an easing tween between the start and target location, addition updates to the tween function on the same object will only update the target for easier animation of a single element.

[Live example]()

```javascript

```

#### mouseSpeedX()
###### mouseSpeedX()
Calcualtes the speed of the mouse on the X axis

[Live example]()

```javascript

```

#### mouseSpeedY()
###### mouseSpeedY()
Calcualtes the speed of the mouse on the Y axis

[Live example]()

```javascript

```

#### sfx()
###### sfx(audioFile, startTime)
plays back audio from an audio file at a specified start time.

[Live example]()

```javascript

```

#### synthNote()
###### synthNote(note,duration)
plays back a synthesized note at the specified note+octave eg. "C4", for a specified duration in seconds.

[Live example]()

```javascript

```


####   particles()
######   particles(x,y, size, speed, lifespan, r,g,b,a)
creates a ellipse based particle effect at a specificed location. Size specificies the ize of each particle. speed Adjusts the speed of the particles. Lifespan determins how long particles stay on screen, rgba determine color and opacity of the particle effect.

[Live example]()

```javascript

```

####   particlesReset()
######   particlesReset()
resets the particle effect's lifespan so it can be re-engaged after completion

[Live example]()

```javascript

```


####   pathHistory()
######     pathHistory(x,y,length,r,g,b,a,thickness)
creates a narrowing line path that follows the history of a pair of x/y coordinates. 
length specifies how many frames of history will be recorded
rgba indicates the color and opacity of the line
thickness indicates the maximum thickness of the line

[Live example]()

```javascript

```

####   screenShake()
######   screenShake(shakeAmount)
Shakes the entire canvas. the More shakeAmount, the more shake! implements borwnian motion shaking.

[Live example]()

```javascript

```

