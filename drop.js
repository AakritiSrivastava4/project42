class Drop{
    constructor(){
        this.x=random(0,600);
        this.y= random (0,20);
        this.radius= random(7,15);
        this.body=Bodies.circle(this.x,this.y,this.radius,{
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        })
        World.add (world,this.body);
    }

    display(){
        stroke ("skyblue");
        fill ("skyblue");
        if (this.body.position.y >700){
          Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,600)}) 
        }

        circle (this.body.position.x,this.body.position.y,this.radius*2);
        
    }
}