import { Actor, CollisionType, Vector, Shape, Input, Timer } from "excalibur";
import {Resources} from './resources.js';
import { ohNo } from "./Enemypellet.js"; 


export class BossR extends Actor { 

    //points = 0;
    timer

    constructor() {
        super({
            width: Resources.BossR.width,
            height: Resources.BossR.height   
        })
        this.timer = new Timer({
            fcn: () => this.shoot(),
            repeats: true,
            interval:1500
        })
    }  

    onInitialize(engine){

        this.body.CollisionType = CollisionType.Active

        this.graphics.add(Resources.BossR.toSprite());
        this.scale = new Vector (1.2,1.2);

        this.game = engine
        this.game.currentScene.add(this.timer)

        this.timer.start();

    }

    onPreUpdate() {

        let xspeed = 0;
        let yspeed = 0;

        this.vel = new Vector(xspeed, yspeed)
    }

    shoot() {
        const ohNoBullet = new ohNo();
        ohNoBullet.pos = this.pos.clone();
        this.scene.add(ohNoBullet);

    }

}