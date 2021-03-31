class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x, y, radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(3);
        stroke("purple");
        fill("pink");
        ellipse(pos.x, pos.y, 20,20);
    }
}