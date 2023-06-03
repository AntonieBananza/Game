import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from './resources.js';

export class BorderR extends Actor { 

    constructor() {
        super({
            width: Resources.BorderR.width,
            height: Resources.BorderR.height   
        })

    }

    onInitialize(){
        this.pos = new Vector(823,300);

        this.graphics.add(Resources.BorderR.toSprite());

        this.body.collisionType = CollisionType.Fixed;
        
        this.scale = new Vector (0.5,0.5)
    
    }

    onPreUpdate() {

        let xspeed = 0;
        let yspeed = 0;

        this.vel = new Vector(xspeed, yspeed)
    }
}