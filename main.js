const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
let hue = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const paricleArray = [];

window.addEventListener('resize',() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x : undefined,
    y :undefined,
}

canvas.addEventListener('click', (event) =>{
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0;i < 10;i++){
        paricleArray.push(new Particle)

    }
    
});
canvas.addEventListener('mousemove', (event) =>{
    mouse.x = event.x
    mouse.y = event.y
    for(let i = 0;i < 10;i++){
        paricleArray.push(new Particle)

    }
    
});





class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width ;
        // this.y = Math.random() * canvas.height ;
        this.size = Math.random() * 11 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 100% , 50% )';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2) this.size -= 0.1
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0, Math.PI * 2);
        ctx.fill();
    }
}

function init(){
    for(let i = 0; i < 100; i++){
        paricleArray.push(new Particle())
    }
}
init()

function handleParticles(){
    for(let i = 0 ;i < paricleArray.length; i++){
        paricleArray[i].update();
        paricleArray[i].draw();
        if(paricleArray[i].size <= 0.3){
            paricleArray.splice( i , 1);
            i--;
        }
    }
}
console.log(paricleArray)

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'rgba(0,0,0,0.02)'
    ctx.fillRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
    hue +=5
    handleParticles();
}
animate()