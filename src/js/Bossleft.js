import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import {Resources} from './resources.js'; 


export class BossL extends Actor { 

    points = 0;

    constructor() {
        super({
            width: Resources.BossL.width,
            height: Resources.BossL.height   
        })
    }  

    onInitialize(){

        this.body.CollisionType = CollisionType.Active

        this.graphics.add(Resources.BossL.toSprite());
        this.scale = new Vector (1.2,1.2);

        
    console.log("hi");

    }
    
    onPreUpdate() {

        let xspeed = 0;
        let yspeed = 0;

        this.vel = new Vector(xspeed, yspeed)
    }

    addPointsLeft(amount) {

        this.points += amount;
        console.log(this.points + ' from Left')

    }

}