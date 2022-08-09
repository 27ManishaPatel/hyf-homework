//Lets make some art using classes
//Paint a circle to a canvas element

const myCanvas = document.getElementById("myCanvas");
const myCtx = myCanvas.getContext("2d");
myCtx.beginPath();
myCtx.arc(150, 75, 70, 0, 2 * Math.PI);
myCtx.fillStyle = "red";
myCtx.fill();
myCtx.stroke();

//Class creation time!
const myCanvasCircle = document.getElementById("myCanvasCircle") //Three different size and radius and color. 

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.xPos = x;
        this.yPos = y;
        this.radius = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw(canvas) {
        const ctx = canvas.getContext("2d")
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, this.startAngle, this.endAngle)
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.stroke
    }
}
const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
const c2 = new Circle(100, 100, 40, 0, 2 * Math.PI, "#147039");
const c3 = new Circle(30, 100, 25, 0, 2 * Math.PI, "#047999");
c1.draw(myCanvasCircle);
c2.draw(myCanvasCircle);
c3.draw(myCanvasCircle);
//Now lets make art!

//Every 100ms create a new circle instance and draw that to the canvas.
const canvasArt = document.getElementById("canvasArt")// 100ms circle.
let circleAtInterval = setInterval(() => {
    const c12 = new rCircle();
    c12.draw(canvasArt)
}, 100);
setTimeout(()=>{
    clearInterval(circleAtInterval)
}, 10000)

// The circle should have random x, y, radius and color
const randomCircle = document.getElementById("randomCircle");
//What if we wanted the canvas to have the same width and height of the screen?
randomCircle.width = window.innerWidth;
randomCircle.height = window.innerHeight;
class rCircle {
    constructor() {
        this.xPos = Math.random() * randomCircle.width; //random x axis
        this.yPos = Math.random() * randomCircle.height; //random y axis
        this.radius = Math.random() * 100; // random radius
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.fillColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase(); //Random color
    }
    draw(canvas) {
        const rCircle = canvas.getContext("2d")
        rCircle.beginPath();
        rCircle.arc(this.xPos, this.yPos, this.radius, this.startAngle, this.endAngle)
        rCircle.fillStyle = this.fillColor;
        rCircle.fill();
        rCircle.stroke()
    }
}
const circle = new rCircle();
circle.draw(randomCircle)
    //when click in the canvas
randomCircle.addEventListener("click", function() {
    const circle = new rCircle();
    circle.draw(randomCircle)
});
//Follow the mouse - optional
randomCircle.addEventListener("mousemove", function(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    const cCircle = randomCircle.getContext("2d")
    cCircle.beginPath();
    cCircle.arc(mouseX, mouseY, 20, 0, 2 * Math.PI)
    cCircle.stroke();
})