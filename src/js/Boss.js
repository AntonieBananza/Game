import { Actor, CollisionType, Vector, Shape, Input } from "excalibur";
import {Resources} from './resources.js'; 


export class BossHead extends Actor { 

    //points = 0;
    game;

    constructor() {
        super({
            width: Resources.BossHead.width,
            height: Resources.BossHead.height   
        })
    }  

    onInitialize(){

        this.body.CollisionType = CollisionType.Fixed

        this.graphics.add(Resources.BossHead.toSprite());
        this.scale = new Vector (3.0,3.0);

    }

    onPreUpdate() {

        let xspeed = 0;
        let yspeed = 0;

        this.vel = new Vector(xspeed, yspeed)
    }



}
