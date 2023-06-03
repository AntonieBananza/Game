import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class BorderL extends Actor { 

    constructor() {
        super({
            width: Resources.BorderL.width,
            height: Resources.BorderL.height   
        })

    }

    onInitialize(){
        this.pos = new Vector(-20,300);

        this.graphics.add(Resources.BorderL.toSprite());

        this.body.collisionType = CollisionType.Fixed;
        
        this.scale = new Vector (0.5,0.5)
    
    }

    onPreUpdate() {

        let xspeed = 0;
        let yspeed = 0;

        this.vel = new Vector(xspeed, yspeed)
    }
}