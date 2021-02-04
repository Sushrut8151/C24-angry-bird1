class Pig 
{
    constructor(x,y)
    {
       var pig_option = {
           restitution : 0,
           density : 1.0,
           friction : 0.3
       }
        this.body = Bodies.rectangle(x,y,50,50,pig_option);
        this.width = 50;
        this.height = 50;
        World.add(myWorld,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("white")
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}