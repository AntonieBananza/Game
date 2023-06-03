import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import {Resources} from './resources.js'; 


export class BossR extends Actor { 

    points = 0;

    constructor() {
        super({
            width: Resources.BossR.width,
            height: Resources.BossR.height   
        })
    }  

    onInitialize(){

        this.body.CollisionType = CollisionType.Active

        this.graphics.add(Resources.BossR.toSprite());
        this.scale = new Vector (1.2,1.2);

    }

    onPreUpdate() {

        let xspeed = 0;
        let yspeed = 0;

        this.vel = new Vector(xspeed, yspeed)
    }

    addPointsRight(amount) {

        this.points += amount;
        console.log(this.points + ' from Right')

    }
}