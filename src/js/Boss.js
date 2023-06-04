import { Actor, CollisionType, Vector, Shape, Input, Timer } from "excalibur";
import {Resources} from './resources.js';
import { ohNo } from "./Enemypellet.js"; 

export class BossHead extends Actor { 

    //points = 0;
    game;
    timer;

    constructor() {
        super({
            width: Resources.BossHead.width,
            height: Resources.BossHead.height   
        })

    }  

    onInitialize(engine){

        this.body.CollisionType = CollisionType.Fixed

        this.graphics.add('normal', Resources.BossHead.toSprite());
        this.graphics.add('hit', Resources.BossHead.toSprite());

        this.graphics.use('normal')

        this.scale = new Vector (3.0,3.0);

        this.game = engine
        this.game.currentScene.add(this.timer)

        this.timer.start();

    }

    onPreUpdate() {

        let xspeed = 0;
        let yspeed = 0;

        this.vel = new Vector(xspeed, yspeed)
    }

    getHit() {

        this.graphics.use('hit')

    }

    returnHit() {

        this.graphics.use('normal')
    }

}

