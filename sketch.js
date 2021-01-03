var player1,virus1,virus2

function preload (){

}
function setup(){
    createCanvas(600,600)
     player1=createSprite(10,10,20,20)
    // virus1=createSprite(10,10,20,40)
     virus2=createSprite(10,10,30,30)
    log1=createSprite(250,560,500,10)

}
function draw(){
    background("black")
    if (frameCount%100===0){
    virus1=createSprite(random(10,580),random(10,580),20,40)
    virus1.shapeColor="yellow" 
    virus1.velocityX=random(-15,15)
    virus1.velocityY=random(-15,15)
    }
    drawSprites()
    text(mouseX + "   "+"  "+mouseY,mouseX+20,mouseY+10)
    

}