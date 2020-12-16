class Umbrella{
    constructor(){
        this.x=330;
        this.y= 320;
        this.radius= 100;
        this.body=Bodies.circle(this.x,this.y,this.radius,{
            isStatic: true,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        })
        World.add (world,this.body);
    }

    display(){
        stroke ("black");
        fill ("black");
       
        circle (this.body.position.x,this.body.position.y,this.radius*2);;

    }
}